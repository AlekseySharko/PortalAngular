import { Injectable } from '@angular/core';
import {MainCategoryProvider} from "../catalog-categories-classes/main-category-provider";
import {CatalogMainCategory} from "../catalog-categories-classes/catalog-main-category";
import {HttpClient} from "@angular/common/http";
import {ApiOriginService} from "../../../../services/api-origin.service";

@Injectable({
  providedIn: 'root'
})
export class MainCategoryStandardProviderService implements MainCategoryProvider{
  constructor(private api: ApiOriginService, private http: HttpClient) { }
  getAllCategories() {
    return this.http.get<CatalogMainCategory[]>(this.api.apiOrigin + "/api/catalog/main-categories/");
  }
}