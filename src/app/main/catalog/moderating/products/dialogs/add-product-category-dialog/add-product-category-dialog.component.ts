import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../services/main-category-standard-provider.service";
import {CatalogMainCategory} from "../../../../catalog-classes/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../../../../catalog-classes/catalog-header/catalog-subcategory";
import {AreYouSureDialogData} from "../../../../../dialogs/are-you-sure-dialog/are-you-sure-dialog.component";

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
              @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
    this.productCategoryName = this.data;
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
