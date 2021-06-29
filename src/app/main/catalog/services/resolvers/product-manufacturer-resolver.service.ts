import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ProductManufacturerStandardProviderService} from "../product-manufacturer-standard-provider.service";
import {Manufacturer} from "../../classes/products/manufacturer";

@Injectable({
  providedIn: 'root'
})
export class ProductManufacturerResolverService {

  constructor(private manufacturerProvider: ProductManufacturerStandardProviderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Manufacturer[]> | Promise<Manufacturer[]> | Manufacturer[] {
    return this.manufacturerProvider.getAllManufacturers();
  }
}
