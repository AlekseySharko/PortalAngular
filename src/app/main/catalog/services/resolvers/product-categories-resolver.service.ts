import { Injectable } from '@angular/core';
import {ProductCategoryStandardProviderService} from "../product-category-standard-provider.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProductCategory} from "../../classes/catalog-header/product-category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesResolverService implements Resolve<ProductCategory[]>{

  constructor(private productCategoriesProvider: ProductCategoryStandardProviderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductCategory[]> | Promise<ProductCategory[]> | ProductCategory[] {
    return this.productCategoriesProvider.getAllCategories();
  }
}
