import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../../core/classes/main/catalog/catalog-header/catalog-main-category";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../../core/services/main/catalog/main-category-standard-provider.service";
import {CatalogSubCategory} from "../../../../../core/classes/main/catalog/catalog-header/catalog-subcategory";
import {Subscription} from "rxjs";
import {SubCategoryStandardProviderService} from "../../../../../core/services/main/catalog/sub-category-standard-provider.service";
import {DialogMessageHandlerService} from "../../../../../shared/dialogs/dialog-message-handler.service";

export interface AddSubCategoryData {
  edit: boolean,
  subCategory: CatalogSubCategory
}

@Component({
  selector: 'app-add-sub-category-dialog',
  templateUrl: './add-sub-category-dialog.component.html',
  styleUrls: ['./add-sub-category-dialog.component.css']
})
export class AddSubCategoryDialogComponent implements OnInit, OnDestroy {
  mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  subCategoryName: string = '';
  httpSubscription: Subscription = new Subscription();

  constructor(public dialogRef: MatDialogRef<AddSubCategoryDialogComponent>,
              private mainCategoriesProvider: MainCategoryStandardProviderService,
              private subCategoriesProvider: SubCategoryStandardProviderService,
              private dialogErrorHandler: DialogMessageHandlerService,
              @Inject(MAT_DIALOG_DATA) public data: AddSubCategoryData) {}

  ngOnInit(): void {
    this.mainCategoriesProvider.getAllCategories(true).subscribe(
      mainCategories => {
        this.mainCategories = mainCategories;
        this.subCategoryName = this.data.subCategory.name;
        this.data.subCategory.parentMainCategory = mainCategories.find(mc =>
          mc.catalogMainCategoryId == this.data.subCategory.parentMainCategory?.catalogMainCategoryId
        ) ?? new CatalogMainCategory();
        this.selectedMainCategory = this.data.subCategory.parentMainCategory;
      }
    )
  }

  onAddClick() {
    let subCategoryToSend = new CatalogSubCategory();
    subCategoryToSend.name = this.subCategoryName;
    let methodToSend;

    if(this.data.edit) {
      subCategoryToSend.parentMainCategory = this.selectedMainCategory;
      subCategoryToSend.catalogSubCategoryId = this.data.subCategory.catalogSubCategoryId;
      methodToSend = this.subCategoriesProvider.putSubCategory.bind(this.subCategoriesProvider, subCategoryToSend);
    } else {
      subCategoryToSend.parentMainCategory = null;
      methodToSend = this.subCategoriesProvider.postSubCategory.bind(
        this.subCategoriesProvider, subCategoryToSend, this.selectedMainCategory.catalogMainCategoryId);
    }

    this.httpSubscription = methodToSend().subscribe(
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
