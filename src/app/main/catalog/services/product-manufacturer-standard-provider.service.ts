import { Injectable } from '@angular/core';
import {ApiOriginService} from "../../../services/api-origin.service";
import {HttpClient} from "@angular/common/http";
import {Manufacturer} from "../catalog-classes/products/manufacturer";

@Injectable({
  providedIn: 'root'
})
export class ProductManufacturerStandardProviderService {

  constructor(private api: ApiOriginService, private http: HttpClient) { }
  getAllManufacturers() {
    return this.http.get<Manufacturer[]>( this.api.apiOrigin + "/api/catalog/product-manufacturers");
  }
}
