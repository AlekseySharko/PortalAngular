import { Injectable } from '@angular/core';
import {MainCategoryProvider} from "../classes/catalog-header/main-category-provider";
import {CatalogMainCategory} from "../classes/catalog-header/catalog-main-category";
import {HttpClient} from "@angular/common/http";
import {ApiOriginService} from "../../../services/api-origin.service";

@Injectable({
  providedIn: 'root'
})
export class MainCategoryStandardProviderService implements MainCategoryProvider{
  constructor(private api: ApiOriginService, private http: HttpClient) { }
  getAllCategories() {
    return this.http.get<CatalogMainCategory[]>(this.api.apiOrigin +
      "/api/catalog/main-categories/");
  }
  getAllCategoriesIncludingSubs() {
    return this.http.get<CatalogMainCategory[]>(this.api.apiOrigin +
      "/api/catalog/main-categories?includeSubcategories=true");
  }
  getAllCategoriesIncludingSubsAndProductCategories() {
    return this.http.get<CatalogMainCategory[]>(this.api.apiOrigin +
      "/api/catalog/main-categories?includeSubcategories=true&includeProductCategories=true");
  }
  postCategory(mainCategory: CatalogMainCategory) {
    return this.http.post(this.api.apiOrigin + "/api/catalog/main-categories/", mainCategory);
  }
  putCategory(mainCategory: CatalogMainCategory) {
    return this.http.put(this.api.apiOrigin + "/api/catalog/main-categories/", mainCategory);
  }
  deleteCategory(mainCategoryId: number) {
    return this.http.delete(this.api.apiOrigin + "/api/catalog/main-categories/" + mainCategoryId);
  }
}