import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {MatSelectChange} from "@angular/material/select";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";
import {ProductCategory} from "../../../../classes/catalog-header/product-category";
import {MatDialog} from "@angular/material/dialog";
import {AddProductCategoryDialogComponent} from "../../dialogs/add-product-category-dialog/add-product-category-dialog.component";
import {UpdatedEventProviderService} from "../../../../services/updated-event-provider.service";
import {AreYouSureDialogComponent} from "../../../../../dialogs/are-you-sure-dialog/are-you-sure-dialog.component";
import {InformationDialogComponent} from "../../../../../dialogs/information-dialog/information-dialog.component";
import {ProductCategoryStandardProviderService} from "../../../../services/product-category-standard-provider.service";

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html'
})
export class EditProductCategoryComponent implements OnInit {

  @Input() mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  selectedSubCategory: CatalogSubCategory = new CatalogSubCategory();
  selectedProductCategory: ProductCategory = new ProductCategory();

  constructor(private dialog: MatDialog,
              private updatedEvent: UpdatedEventProviderService,
              private productCategoryProvider: ProductCategoryStandardProviderService) {}

  ngOnInit(): void {
  }

  onAdd() {
    let productCategoryToAdd = new ProductCategory();
    productCategoryToAdd.parentSubCategory = this.selectedSubCategory;
    productCategoryToAdd.parentSubCategory.parentMainCategory = this.selectedMainCategory;
    const dialogRef = this.dialog.open(AddProductCategoryDialogComponent, {
      width: '24rem',
      data: {edit: false, productCategory: productCategoryToAdd}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onEdit() {
    this.selectedProductCategory.parentSubCategory = this.selectedSubCategory;
    this.selectedProductCategory.parentSubCategory.parentMainCategory = this.selectedMainCategory;

    const dialogRef = this.dialog.open(AddProductCategoryDialogComponent, {
      width: '24rem',
      data: {edit: true, productCategory: this.selectedProductCategory}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onDelete() {
    if (!this.selectedProductCategory) return;

    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '24rem',
      data: {
        question: `Are you sure you want to remove ${this.selectedProductCategory.name}?`,
        okButton: "Remove",
        cancelButton: "Cancel"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.productCategoryProvider.deleteCategory(this.selectedProductCategory?.productCategoryId ?? 0).subscribe(
        () => {},
        error => {
          const dialogRef = this.dialog.open(InformationDialogComponent, {
            width: '24rem',
            data: {bold: error.error}
          });
          this.onAfterChange(true);
        },
        () => {
          this.onAfterChange(true);
        });
    });
  }

  onMainCategoryChange(event: MatSelectChange) {
    if(this.selectedMainCategory == event.value) return;

      this.selectedMainCategory = event.value;
      this.selectedSubCategory = new CatalogSubCategory();
      this.selectedProductCategory = new ProductCategory();
  }

  onSubCategoryChange(event: MatSelectChange) {
    if(this.selectedSubCategory == event.value) return;

    this.selectedSubCategory = event.value;
    this.selectedProductCategory = new ProductCategory();
  }

  onAfterChange(result: boolean) {
    if(!result) return;
    this.updatedEvent.updatedProductRelatedDataEmitter.emit();
    this.selectedMainCategory = new CatalogMainCategory();
    this.selectedSubCategory = new CatalogSubCategory();
    this.selectedProductCategory = new ProductCategory();
  }
}
