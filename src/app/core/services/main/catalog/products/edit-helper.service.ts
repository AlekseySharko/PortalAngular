import { Injectable } from '@angular/core';
import {DialogMessageHandlerService} from "../../../dialog-message-handler.service";
import {Observable} from "rxjs";
import {AreYouSureDialogComponent} from "../../../../../shared/dialogs/are-you-sure-dialog/are-you-sure-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class EditHelperService {

  constructor(private dialogErrorHandler: DialogMessageHandlerService,
              private dialog: MatDialog) { }

  deleteAskingPermission(deleteFunc: () => Observable<Object>,
                         deletedName: string,
                         onError: () => any = () => {},
                         onComplete:() => any = () => {}) {
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      maxWidth: '24rem',
      data: {
        question: `Are you sure you want to remove ${deletedName}?`,
        okButton: "Remove",
        cancelButton: "Cancel"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      deleteFunc().subscribe(
        () => {
        },
        error => {
          this.dialogErrorHandler.onHttpError(error);
          onError();
        },
        () => {
          onComplete();
        });
    });
  }
}
