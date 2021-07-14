import { Injectable } from '@angular/core';
import {InformationDialogComponent} from "./information-dialog/information-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogMessageHandlerService {
  constructor(private dialog: MatDialog) {}

  onHttpError(error: any, textNotCenter: boolean = false) {
    let errorMessage = this.findErrorMessage(error);
    this.dialog.open(InformationDialogComponent, {
      maxWidth: '24rem',
      data: {
        bold: errorMessage.trim(),
        textNotCenter
      }
    });
  }

  onHttpSuccess(message: string) {
    this.dialog.open(InformationDialogComponent, {
      maxWidth: '24rem',
      data: {bold: message}
    });
  }

  private findErrorMessage(error: any) {
    let checkIfString = function (input: any) {
      if(input && typeof input === 'string') {
        return input;
      }
      return null;
    }

    if(checkIfString(error.error)) {
      return error.error;
    }
    if(checkIfString(error.statusText)) {
      return error.statusText;
    }
    return "There was an error"
  }
}

