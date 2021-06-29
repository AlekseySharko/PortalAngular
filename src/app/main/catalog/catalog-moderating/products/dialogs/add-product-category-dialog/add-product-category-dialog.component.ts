import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../services/main-category-standard-provider.service";
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";
import {ProductCategory} from "../../../../classes/catalog-header/product-category";

export interface AddMainCategoryData {
  edit: boolean;
  mainCategory: CatalogMainCategory;
  subCategory: CatalogSubCategory;
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
  productCategoryName: string = '';

  constructor(public dialogRef: MatDialogRef<AddProductCategoryDialogComponent>,
              private mainCategoriesProvider: MainCategoryStandardProviderService,
              @Inject(MAT_DIALOG_DATA) public data: AddMainCategoryData) {}

  ngOnInit(): void {
    this.productCategoryName = this.data.productCategory.name;
    this.mainCategoriesProvider.getAllCategoriesIncludingSubs().subscribe(
      mainCategories => {
        this.mainCategories = mainCategories;
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
