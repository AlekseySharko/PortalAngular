import {ProductCategory} from "./product-category";
import {CatalogMainCategory} from "./catalog-main-category";

export class CatalogSubCategory {
  public catalogSubCategoryId: number = 0;
  public name: string = '';
  public productCategories: ProductCategory[] = [];
}
