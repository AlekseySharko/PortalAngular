import { Injectable } from '@angular/core';
import {ApiOriginService} from "../../api-origin.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProductCategory} from "../../../classes/main/catalog/catalog-header/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryStandardProviderService {
  constructor(private api: ApiOriginService, private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get<ProductCategory[]>(this.api.apiOrigin + "/api/catalog/product-categories");
  }
  postCategory(productCategory: ProductCategory, subCategoryId: number) {
    return this.http.post(this.api.apiOrigin + "/api/catalog/product-categories",
      productCategory,
      {
        params: new HttpParams().set("subCategoryId", subCategoryId)
      });
  }
  putCategory(productCategory: ProductCategory) {
    return this.http.put(this.api.apiOrigin + "/api/catalog/product-categories",productCategory);
  }
  deleteCategory(productCategoryId: number) {
    return this.http.delete(this.api.apiOrigin + "/api/catalog/product-categories/" + productCategoryId);
  }
}
