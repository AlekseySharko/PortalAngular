import {NameAware} from "../../../../core/services/name-aware";
import {CatalogSubCategory} from "./catalog-subcategory";

export class CatalogMainCategory implements NameAware {
  public catalogMainCategoryId: number = 0;
  public name: string = '';
  public imageAddress: string = '';
  public subCategories: CatalogSubCategory[] = [];
}
