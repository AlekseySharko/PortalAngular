import {NameAware} from "../../../../core/services/name-aware";
import {CatalogSubCategory} from "./catalog-subcategory";

export class ProductCategory implements NameAware {
  public productCategoryId: number = 0;
  public name: string = '';
  public parentSubCategory: CatalogSubCategory | null = new CatalogSubCategory();
}
