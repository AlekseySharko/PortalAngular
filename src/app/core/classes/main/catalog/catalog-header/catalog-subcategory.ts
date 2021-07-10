import {ProductCategory} from "./product-category";
import {CatalogMainCategory} from "./catalog-main-category";
import {NameAware} from "../../../../services/name-aware";

export class CatalogSubCategory implements NameAware {
  public catalogSubCategoryId: number = 0;
  public name: string = '';
  public productCategories: ProductCategory[] = [];
  public parentMainCategory: CatalogMainCategory | null = new CatalogMainCategory;
}
