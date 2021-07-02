import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CatalogSubCategory} from "../classes/catalog-header/catalog-subcategory";
import {ApiOriginService} from "../../../services/api-origin.service";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryStandardProviderService {
  constructor(private api: ApiOriginService, private http: HttpClient) { }

  postSubCategory(subCategory: CatalogSubCategory, mainCategoryId: number) {
    return this.http.post(
      this.api.apiOrigin + "/api/catalog/sub-categories", subCategory, {
        params: new HttpParams().set('mainCategoryId', mainCategoryId)
      });
  }
  putSubCategory(subCategory: CatalogSubCategory) {
    return this.http.put(
      this.api.apiOrigin + "/api/catalog/sub-categories", subCategory);
  }
  deleteSubCategory(subCategoryId: number) {
    return this.http.delete(this.api.apiOrigin + "/api/catalog/sub-categories/" + subCategoryId);
  }
}
