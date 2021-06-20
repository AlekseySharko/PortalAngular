import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Product} from "../../../../catalog-classes/products/product";
import {NgForm} from "@angular/forms";
import {ProductCategoryStandardProviderService} from "../../../../services/product-category-standard-provider.service";
import {ProductCategory} from "../../../../catalog-classes/catalog-header/product-category";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit, OnDestroy {
  @Input() product: Product = new Product();
  @Output() productChanged: EventEmitter<Product> = new EventEmitter<Product>();
  productCategories: ProductCategory[] = [];
  productCategoriesSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productCategoriesSubscription = this.route.data.subscribe(data => {
      this.productCategories = data['productCategories'];
    });
  }

  onSaveChanges(form: NgForm) {
    this.product.name = form.value.name;
    this.product.price = form.value.price;
    this.product.productCategory = this.productCategories.find(c=> c.name == form.value.productCategory) ?? new ProductCategory();
    this.product.shortDescription = form.value.shortDescription;
    console.log(this.product);
    this.productChanged.emit(this.product);
  }

  ngOnDestroy(): void {
    this.productCategoriesSubscription.unsubscribe();
  }
}
