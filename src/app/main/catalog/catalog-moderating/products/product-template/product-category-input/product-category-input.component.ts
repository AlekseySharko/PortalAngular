import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from "../../../../classes/catalog-header/product-category";
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";
import {MatSelectChange} from "@angular/material/select";
import {FormControl, FormGroup} from "@angular/forms";
import {MainCategoryStandardProviderService} from "../../../../services/main-category-standard-provider.service";
import {MatDialog} from "@angular/material/dialog";
import {AddProductCategoryDialogComponent} from "../../dialogs/add-product-category-dialog/add-product-category-dialog.component";
import {GeneralDataValidatorService} from "../../../../../../core/services/general-data-validator.service";

@Component({
  selector: 'app-product-category-input',
  templateUrl: './product-category-input.component.html',
  styleUrls: ['./product-category-input.component.css']
})
export class ProductCategoryInputComponent implements OnInit {
  @Input() parentFormGroup!: FormGroup;
  productCategoryFormControl!: FormControl;
  mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  selectedSubCategory: CatalogSubCategory = new CatalogSubCategory();

  constructor(private mainCategoryProvider: MainCategoryStandardProviderService,
              private dialog: MatDialog,
              private generalValidator: GeneralDataValidatorService) {}

  ngOnInit(): void {
    this.getMainCategories();
    this.setUpFormControl();
  }

  onAddProductCategory() {
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

  onAfterChange(result: boolean) {
    if(!result) return;
    this.getMainCategories();
    this.selectedMainCategory = new CatalogMainCategory();
    this.selectedSubCategory = new CatalogSubCategory();
    this.resetProductCategory();
  }

  onMainCategoryChange(event: MatSelectChange) {
    if(this.selectedMainCategory == event.value) return;
    this.selectedMainCategory = event.value;
    this.selectedSubCategory = new CatalogSubCategory();
    this.resetProductCategory();
  }

  onSubCategoryChange(event: MatSelectChange) {
    if(this.selectedSubCategory == event.value) return;
    this.selectedSubCategory = event.value;
    this.resetProductCategory(this.selectedSubCategory.productCategories?.length < 1);
  }

  resetProductCategory(disable: boolean = true) {
    this.productCategoryFormControl.setValue(new ProductCategory());
    if(disable) {
      this.productCategoryFormControl.disable();
    } else {
      this.productCategoryFormControl.enable();
    }
  }

  setUpFormControl() {
    this.productCategoryFormControl = new FormControl(null, [
      this.generalValidator.getIdValidator('productCategoryId', 'NoSuchProductCategory')
    ]);
    this.productCategoryFormControl.disable();
    this.parentFormGroup.addControl('product-category',this.productCategoryFormControl);
  }

  getMainCategories() {
    this.mainCategoryProvider.getAllCategories(true, true).subscribe(data => {
      this.mainCategories = data;
    })
  }
}
