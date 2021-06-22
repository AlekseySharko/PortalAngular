import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Product} from "../../../../catalog-classes/products/product";
import {FormControl, FormGroup, FormsModule, NgForm, Validators} from "@angular/forms";
import {ProductCategoryStandardProviderService} from "../../../../services/product-category-standard-provider.service";
import {ProductCategory} from "../../../../catalog-classes/catalog-header/product-category";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css'],
  providers: [GeneralDataValidatorService]
})
export class ProductTemplateComponent implements OnInit, OnDestroy {
  @Input() product: Product = new Product();
  @Output() productChanged: EventEmitter<Product> = new EventEmitter<Product>();
  productCategories: ProductCategory[] = [];
  productCategoriesSubscription: Subscription = new Subscription();
  productForm!: FormGroup;

  constructor(private route: ActivatedRoute,
              private generalValidation: GeneralDataValidatorService) { }

  ngOnInit(): void {
    this.productCategoriesSubscription = this.route.data.subscribe(data => {
      this.productCategories = data['productCategories'];
      this.initialiseFormGroup();
    });
  }

  onSaveChanges() {
    this.product.name = this.productForm.value.name;
    this.product.price = this.productForm.value.price;
    this.product.productCategory = this.productCategories.find(c=> c.name == this.productForm.value.productCategory)
      ?? new ProductCategory();
    this.product.shortDescription = this.productForm.value.shortDescription;
    this.productChanged.emit(this.product);
  }

  checkValidation(controlPath:string) {
    let control = this.productForm.get(controlPath);
    return control?.valid || !control?.touched;
  }

  canSaveChanges() {
    return this.productForm.valid && this.product.images.length > 0;
  }

  initialiseFormGroup() {
    this.productForm = new FormGroup({
      'name': new FormControl(null, [
        Validators.required
      ]),
      'price': new FormControl(null, [
        Validators.required,
        Validators.min(0.01)
      ]),
      'productCategory': new FormControl(null, [
        Validators.required,
        this.generalValidation.getInCollectionNameValidator(this.productCategories,'NoSuchCategory')
      ]),
      'manufacturer': new FormControl(null, [
        Validators.required
      ]),
      'shortDescription': new FormControl(null, [
        Validators.required
      ])
    });
  }

  ngOnDestroy(): void {
    this.productCategoriesSubscription.unsubscribe();
  }
}
