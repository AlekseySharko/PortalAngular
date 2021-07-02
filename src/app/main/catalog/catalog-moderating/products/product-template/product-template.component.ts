import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Product} from "../../../classes/products/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {GeneralDataValidatorService} from "../../../../../services/general-data-validator.service";

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
  nameFormControl!: FormControl;
  priceFormControl!: FormControl;
  shortDescriptionFormControl!: FormControl;

  constructor(private generalValidation: GeneralDataValidatorService) {
  }

  ngOnInit(): void {
    this.initialiseFormGroup();
  }
  ngOnDestroy(): void {
    this.productCategoriesSubscription.unsubscribe();
  }

  onSaveChanges() {
    this.product.name = this.productForm.value.name;
    this.product.price = this.productForm.value.price;
    this.product.productCategory = this.productForm.value['product-category'];
    this.product.shortDescription = this.productForm.value['short-description'];
    this.product.manufacturer = this.productForm.value.manufacturer;
    this.productChanged.emit(this.product);
  }

  canSaveChanges() {
    return this.productForm.valid && this.product.images.length > 0;
  }

  checkValidation(controlPath:string) {
    let control = this.productForm.get(controlPath);
    return control?.valid || !control?.dirty;
  }

  initialiseFormGroup() {
    this.nameFormControl = new FormControl(null, [
      this.generalValidation.getEmptyOrWhiteSpaceValidator()
    ]);
    this.priceFormControl = new FormControl(null, [
      this.generalValidation.getEmptyOrWhiteSpaceValidator(),
      Validators.min(0.01)
    ]);
    this.shortDescriptionFormControl = new FormControl(null, [
      this.generalValidation.getEmptyOrWhiteSpaceValidator()
    ]);

    this.productForm = new FormGroup({
      'name': this.nameFormControl,
      'price': this.priceFormControl,
      'short-description': this.shortDescriptionFormControl
    });
  }
}
