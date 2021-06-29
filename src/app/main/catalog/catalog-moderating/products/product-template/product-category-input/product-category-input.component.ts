import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from "../../../../classes/catalog-header/product-category";
import {Observable, Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";
import {map, startWith} from "rxjs/operators";
import {Filter} from "../../../../classes/helpers/filter";
import {ActivatedRoute} from "@angular/router";
import {AddProductCategoryDialogComponent} from "../../dialogs/add-product-category-dialog/add-product-category-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";

@Component({
  selector: 'app-product-category-input',
  templateUrl: './product-category-input.component.html',
  styleUrls: ['./product-category-input.component.css']
})
export class ProductCategoryInputComponent implements OnInit {
  @Input() parentFormGroup!: FormGroup;
  productCategoryFormControl!: FormControl;
  productCategories: ProductCategory[] = [];
  productCategoriesSubscription: Subscription = new Subscription();
  filteredProductCategoryNames!: Observable<string[]>;

  constructor(private generalValidation: GeneralDataValidatorService, private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.productCategoriesSubscription = this.route.data.subscribe(data => {
        this.productCategories = data['productCategories'];
        this.setUpFromControl();
      });
  }

  setUpFromControl() {
    this.productCategoryFormControl = new FormControl(null, [
      this.generalValidation.getEmptyOrWhiteSpaceValidator(),
      this.generalValidation.getInCollectionNameValidator(this.productCategories,'NoSuchCategory')
    ]);
    this.parentFormGroup.addControl('product-category', this.productCategoryFormControl);
    this.setUpAutocomplete();
  }

  setUpAutocomplete() {
    this.filteredProductCategoryNames = this.productCategoryFormControl.valueChanges
      .pipe(
        startWith(''),
        map(data => Filter.nameFilter(this.productCategories, data))
      ) ?? new Observable<string[]>();
  }

  onAddProductCategory() {
    let inputProductCategory = new ProductCategory();
    inputProductCategory.name = this.productCategoryFormControl?.value;
    const dialogRef = this.dialog.open(AddProductCategoryDialogComponent, {
      width: '24rem',
      data: {
        edit: false,
        productCategory: inputProductCategory,
        mainCategory: new CatalogMainCategory(),
        subCategory: new CatalogSubCategory()}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
    });
  }

  checkValidation(controlPath:string) {
    let control = this.parentFormGroup.get(controlPath);
    return control?.valid || !control?.dirty;
  }
}
