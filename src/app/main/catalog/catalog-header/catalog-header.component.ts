import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainCategoryStandardProviderService} from "./services/main-category-standard-provider.service";
import {CatalogMainCategory} from "../catalog-classes/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../catalog-classes/catalog-header/catalog-subcategory";
import {SubCategoryStandardProviderService} from "./services/sub-category-standard-provider.service";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog-header',
  templateUrl: './catalog-header.component.html',
  styleUrls: ['./catalog-header.component.css'],
  providers:[MainCategoryStandardProviderService]
})
export class CatalogHeaderComponent implements OnInit, OnDestroy {
  mainCategories: CatalogMainCategory[] = [];
  selectedSubcategories: CatalogSubCategory[] = [];
  categoriesSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private subCategoryStandardProviderService: SubCategoryStandardProviderService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.route.data.subscribe(data => {
      this.mainCategories = data['mainCategories'];
      this.onMainCategorySelect(this.mainCategories[0]?.catalogMainCategoryId);
    });
  }

  onMainCategorySelect(mainCategoryId:number) {
    this.subCategoryStandardProviderService.getSubCategories(mainCategoryId).subscribe(
      (sc: CatalogSubCategory[]) => this.selectedSubcategories = sc
    )
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
