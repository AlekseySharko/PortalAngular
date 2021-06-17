import {Component, Input, OnInit} from '@angular/core';
import {CatalogSubCategory} from "../catalog-categories-classes/catalog-subcategory";
import {ProductCategory} from "../catalog-categories-classes/product-category";
import {RandomProductPictureProviderService} from "../services/random-product-picture-provider.service";

@Component({
  selector: 'app-catalog-subcategories',
  templateUrl: './catalog-subcategories.component.html',
  styleUrls: ['./catalog-subcategories.component.css']
})
export class CatalogSubcategoriesComponent implements OnInit {
  @Input() subcategories:CatalogSubCategory[] = [];
  selectedProductCategories: ProductCategory[] = [];

  ngOnInit(): void {
  }

  onSubcategoryHover(catalogSubcategory: CatalogSubCategory) {
    this.selectedProductCategories = catalogSubcategory.productCategories;
  }
}
