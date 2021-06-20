import { Injectable } from '@angular/core';
import {ApiOriginService} from "../../../services/api-origin.service";
import {HttpClient} from "@angular/common/http";
import {ProductCategory} from "../catalog-classes/catalog-header/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryStandardProviderService {
  constructor(private api: ApiOriginService, private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get<ProductCategory[]>(this.api.apiOrigin + "/api/catalog/product-categories");
  }
}
