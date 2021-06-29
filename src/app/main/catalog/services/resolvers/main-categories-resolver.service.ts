import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CatalogMainCategory} from "../../classes/catalog-header/catalog-main-category";
import {Observable} from "rxjs";
import {MainCategoryStandardProviderService} from "../main-category-standard-provider.service";

@Injectable({
  providedIn: 'root'
})
export class MainCategoriesResolverService implements Resolve<CatalogMainCategory[]>{

  constructor(private mainCategoryProvider: MainCategoryStandardProviderService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CatalogMainCategory[]> | Promise<CatalogMainCategory[]> | CatalogMainCategory[] {
    return this.mainCategoryProvider.getAllCategories()
  }
}
