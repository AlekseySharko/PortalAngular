import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from "../../../classes/catalog-header/product-category";
import {RandomProductPictureProviderService} from "../../../services/random-product-picture-provider.service";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  @Input() selectedCategories: ProductCategory[] = [];
  productCategoryPictures: string[] = [];
  constructor(private productPictureProvider: RandomProductPictureProviderService) {
  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.productCategoryPictures.push(this.productPictureProvider.getUrl())
    }
  }
}
