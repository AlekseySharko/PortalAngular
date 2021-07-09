import { Injectable } from '@angular/core';
import {ApiOriginService} from "../../../core/services/api-origin.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../classes/products/product";

@Injectable({
  providedIn: 'root'
})
export class ProductStandardProviderService {

  constructor(private api: ApiOriginService, private http: HttpClient) { }

  postProduct(product: Product, productCategoryId: number) {
    return this.http.post(this.api.apiOrigin + '/api/catalog/products', product, {
      params: new HttpParams().set('productCategoryId', productCategoryId)
    })
  }
}
