import { Injectable } from '@angular/core';
import {MainCategoryStandardProviderService} from "../main-category-standard-provider.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CatalogMainCategory} from "../../classes/catalog-header/catalog-main-category";

@Injectable({
  providedIn: 'root'
})
export class MainCategoriesWithSubsAndProdsResolverService {

  constructor(private mainCategoryProvider: MainCategoryStandardProviderService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CatalogMainCategory[]> | Promise<CatalogMainCategory[]> | CatalogMainCategory[] {
    return this.mainCategoryProvider.getAllCategoriesIncludingSubsAndProductCategories();
  }
}
