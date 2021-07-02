import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {MatSelectChange} from "@angular/material/select";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";
import {ProductCategory} from "../../../../classes/catalog-header/product-category";
import {MatDialog} from "@angular/material/dialog";
import {AddProductCategoryDialogComponent} from "../../dialogs/add-product-category-dialog/add-product-category-dialog.component";
import {UpdatedEventProviderService} from "../../../../services/updated-event-provider.service";
import {ProductCategoryStandardProviderService} from "../../../../services/product-category-standard-provider.service";
import {EditHelperService} from "../edit-helper.service";

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
              private editHelper: EditHelperService,
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

    let deleteFunc = this.productCategoryProvider.deleteCategory.bind(
      this.productCategoryProvider, this.selectedProductCategory?.productCategoryId ?? 0);
    let onEnd = this.onAfterChange.bind(this, true);
    this.editHelper.deleteAskingPermission(deleteFunc, this.selectedProductCategory.name, onEnd, onEnd);
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
    this.updatedEvent.updatedProductRelatedDataSubject.next();
    this.selectedMainCategory = new CatalogMainCategory();
    this.selectedSubCategory = new CatalogSubCategory();
    this.selectedProductCategory = new ProductCategory();
  }
}
