import { Injectable } from '@angular/core';
import {MainCategoryProvider} from "../classes/catalog-header/main-category-provider";
import {CatalogMainCategory} from "../classes/catalog-header/catalog-main-category";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiOriginService} from "../../../core/services/api-origin.service";

@Injectable({
  providedIn: 'root'
})
export class MainCategoryStandardProviderService implements MainCategoryProvider{
  constructor(private api: ApiOriginService, private http: HttpClient) { }
  getAllCategories(includeSubcategories: boolean = false, includeProductCategories: boolean = false) {
    let params = new HttpParams();
    if(includeSubcategories) {
      params = params.append('includeSubcategories', true);
      if(includeProductCategories) {
        params = params.append('includeProductCategories', true);
      }
    }
    return this.http.get<CatalogMainCategory[]>(this.api.apiOrigin +
      "/api/catalog/main-categories/", {
      params: params
    });
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
