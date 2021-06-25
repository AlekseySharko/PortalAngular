import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Product} from "../../../catalog-classes/products/product";
import {FormControl, FormGroup, FormsModule, NgForm, Validators} from "@angular/forms";
import {ProductCategory} from "../../../catalog-classes/catalog-header/product-category";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GeneralDataValidatorService} from "../../../../../services/general-data-validator.service";
import {filter, map, startWith} from "rxjs/operators";
import {NameAware} from "../../../../../services/name-aware";
import {Filter} from "../../../catalog-classes/helpers/filter";

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css'],
  providers: [GeneralDataValidatorService]
})
export class ProductTemplateComponent implements OnInit, OnDestroy {
  @Input() product: Product = new Product();
  @Output() productChanged: EventEmitter<Product> = new EventEmitter<Product>();
  productCategoriesSubscription: Subscription = new Subscription();
  productForm!: FormGroup;

  constructor(private generalValidation: GeneralDataValidatorService) { }
  ngOnInit(): void {
      this.initialiseFormGroup();
  }
  ngOnDestroy(): void {
    this.productCategoriesSubscription.unsubscribe();
  }

  onSaveChanges() {
    //this.product.name = this.productForm.value.name;
    //this.product.price = this.productForm.value.price;
    //this.product.productCategory = this.productCategories.find(c=> c.name == this.productForm.value.productCategory)
    //  ?? new ProductCategory();
    //this.product.shortDescription = this.productForm.value.shortDescription;
    //this.productChanged.emit(this.product);
  }

  canSaveChanges() {
    return this.productForm.valid && this.product.images.length > 0;
  }

  checkValidation(controlPath:string) {
    let control = this.productForm.get(controlPath);
    return control?.valid || !control?.touched;
  }

  initialiseFormGroup() {
    this.productForm = new FormGroup({
      'name': new FormControl(null, [
        this.generalValidation.getEmptyOrWhiteSpaceValidator()
      ]),
      'price': new FormControl(null, [
        this.generalValidation.getEmptyOrWhiteSpaceValidator(),
        Validators.min(0.01)
      ]),
      'short-description': new FormControl(null, [
        this.generalValidation.getEmptyOrWhiteSpaceValidator()
      ])
    });
  }
}
