import { Injectable } from '@angular/core';
import {ApiOriginService} from "../../../core/services/api-origin.service";
import {HttpClient} from "@angular/common/http";
import {Manufacturer} from "../classes/products/manufacturer";

@Injectable({
  providedIn: 'root'
})
export class ProductManufacturerStandardProviderService {

  constructor(private api: ApiOriginService, private http: HttpClient) { }

  getAllManufacturers() {
    return this.http.get<Manufacturer[]>( this.api.apiOrigin + "/api/catalog/product-manufacturers");
  }

  postManufacturer(manufacturer: Manufacturer) {
    return this.http.post(this.api.apiOrigin + '/api/catalog/product-manufacturers', manufacturer);
  }

  putManufacturer(manufacturer: Manufacturer) {
    return this.http.put(this.api.apiOrigin + '/api/catalog/product-manufacturers', manufacturer);
  }

  deleteManufacturer(manufacturerId: number){
    return this.http.delete(this.api.apiOrigin + '/api/catalog/product-manufacturers/' + manufacturerId);
  }


}
