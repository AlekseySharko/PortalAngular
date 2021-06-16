import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from "../../catalog-categories-classes/product-category";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  @Input() selectedCategories: ProductCategory[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
