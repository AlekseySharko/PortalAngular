import {ProductImage} from "./product-image";
import {Manufacturer} from "./manufacturer";
import {ProductCategory} from "../catalog-header/product-category";

export class Product {
  productId: number = 0;
  name: string = '';
  shortDescription: string = '';
  price: number = 0;
  popularity: number = 0;
  images: ProductImage[] = [];
  manufacturer!: Manufacturer;
  productCategory!: ProductCategory;
}
