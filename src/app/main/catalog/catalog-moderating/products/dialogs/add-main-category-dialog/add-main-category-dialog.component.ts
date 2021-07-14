import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../../../core/classes/main/catalog/catalog-header/catalog-main-category";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../../../core/services/main/catalog/main-category-standard-provider.service";
import {Subscription} from "rxjs";
import {GeneralDataValidatorService} from "../../../../../../core/services/general-data-validator.service";
import {DialogMessageHandlerService} from "../../../../../../shared/dialogs/dialog-message-handler.service";

export interface AddMainCategoryData {
  edit: boolean;
  mainCategory: CatalogMainCategory;
}
@Component({
  selector: 'app-add-main-category-dialog',
  templateUrl: './add-main-category-dialog.component.html',
  styleUrls: ['./add-main-category-dialog.component.css']
})
export class AddMainCategoryDialogComponent implements OnInit, OnDestroy {
  mainCategoryName = '';
  mainCategoryImage = '';
  httpSubscription: Subscription = new Subscription();

  constructor(private dialogRef: MatDialogRef<AddMainCategoryDialogComponent>,
              private dialogErrorHandler: DialogMessageHandlerService,
              private mainCategoryProvider: MainCategoryStandardProviderService,
              public generalValidator: GeneralDataValidatorService,
              @Inject(MAT_DIALOG_DATA) public data: AddMainCategoryData) {}

  ngOnInit(): void {
    this.mainCategoryName = this.data.mainCategory.name;
    this.mainCategoryImage = this.data.mainCategory.imageAddress;
  }

  onAddClick() {
    let mainCategoryToSend = new CatalogMainCategory();
    mainCategoryToSend.name = this.mainCategoryName;
    mainCategoryToSend.imageAddress = this.mainCategoryImage;
    let methodToSend;

    if(this.data.edit) {
      mainCategoryToSend.catalogMainCategoryId = this.data.mainCategory.catalogMainCategoryId;
      methodToSend = this.mainCategoryProvider.putCategory.bind(this.mainCategoryProvider);
    } else {
      methodToSend = this.mainCategoryProvider.postCategory.bind(this.mainCategoryProvider);
    }

    this.httpSubscription = methodToSend(mainCategoryToSend).subscribe(
      () => {},
      error => {
        this.dialogErrorHandler.onHttpError(error);
        this.dialogRef.close(true);
      },
      () => {
        this.dialogRef.close(true);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }
}
