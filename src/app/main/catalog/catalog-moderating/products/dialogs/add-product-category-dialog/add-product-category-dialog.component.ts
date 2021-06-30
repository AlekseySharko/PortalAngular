import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../services/main-category-standard-provider.service";
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";
import {ProductCategory} from "../../../../classes/catalog-header/product-category";
import {InformationDialogComponent} from "../../../../../dialogs/information-dialog/information-dialog.component";
import {ProductCategoryStandardProviderService} from "../../../../services/product-category-standard-provider.service";
import {Subscription} from "rxjs";

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
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: AddMainCategoryData) {}

  ngOnInit(): void {
    this.productCategoryName = this.data.productCategory.name;
    this.mainCategoriesProvider.getAllCategoriesIncludingSubs().subscribe(
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
        this.dialog.open(InformationDialogComponent, {
          width: '24rem',
          data: {bold: error.error}
        });
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
