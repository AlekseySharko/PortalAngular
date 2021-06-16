import {CatalogMainCategory} from "./catalog-main-category";
import {Observable} from "rxjs";

export interface MainCategoryProvider {
  getAllCategories: () => CatalogMainCategory[] | Observable<CatalogMainCategory[]>;
}
