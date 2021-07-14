import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../../core/services/main/catalog/main-category-standard-provider.service";
import {CatalogMainCategory} from "../../../../../core/classes/main/catalog/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../../../../../core/classes/main/catalog/catalog-header/catalog-subcategory";
import {ProductCategory} from "../../../../../core/classes/main/catalog/catalog-header/product-category";
import {ProductCategoryStandardProviderService} from "../../../../../core/services/main/catalog/product-category-standard-provider.service";
import {Subscription} from "rxjs";
import {DialogMessageHandlerService} from "../../../../../shared/dialogs/dialog-message-handler.service";

export interface AddMainCategoryData {
  edit: boolean;
  productCategory: ProductCategory;
}
@Component({
  selector: 'app-add-product-category-dialog',
  templateUrl: './add-product-category-dialog.component.html',
  styleUrls: ['./add-product-category-dialog.component.css'],
  providers: [MainCategoryStandardProviderService]
})
export class AddProductCategoryDialogComponent implements OnInit {
  mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  selectedSubCategory: CatalogSubCategory = new CatalogSubCategory();
  httpSubscription: Subscription = new Subscription();
  productCategoryName: string = '';

  constructor(public dialogRef: MatDialogRef<AddProductCategoryDialogComponent>,
              private mainCategoriesProvider: MainCategoryStandardProviderService,
              private productCategoryProvider: ProductCategoryStandardProviderService,
              private dialogErrorHandler: DialogMessageHandlerService,
              @Inject(MAT_DIALOG_DATA) public data: AddMainCategoryData) {}

  ngOnInit(): void {
    this.productCategoryName = this.data.productCategory.name;
    this.mainCategoriesProvider.getAllCategories(true).subscribe(
      mainCategories => {
        this.mainCategories = mainCategories;
        this.selectedMainCategory = this.mainCategories.find(mc =>
          mc.catalogMainCategoryId == this.data.productCategory?.parentSubCategory?.parentMainCategory?.catalogMainCategoryId) ?? new CatalogMainCategory();
        this.selectedSubCategory = this.selectedMainCategory.subCategories
          .find(sc => sc.catalogSubCategoryId == this.data.productCategory?.parentSubCategory?.catalogSubCategoryId) ?? new CatalogSubCategory();
      }
    );
  }

  onAddClick() {
    let productToSend = new ProductCategory();
    productToSend.name = this.productCategoryName;
    let methodToSend;

    if(this.data.edit) {
      productToSend.productCategoryId = this.data.productCategory.productCategoryId;
      productToSend.parentSubCategory = this.selectedSubCategory;
      methodToSend = this.productCategoryProvider.putCategory.bind(this.productCategoryProvider, productToSend);
    } else {
      productToSend.parentSubCategory = null;
      methodToSend = this.productCategoryProvider.postCategory.bind(
        this.productCategoryProvider, productToSend, this.selectedSubCategory.catalogSubCategoryId);
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
}
