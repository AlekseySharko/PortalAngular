import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainCategoryStandardProviderService} from "../services/main-category-standard-provider.service";
import {CatalogMainCategory} from "../catalog-classes/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../catalog-classes/catalog-header/catalog-subcategory";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog-header',
  templateUrl: './catalog-header.component.html',
  styleUrls: ['./catalog-header.component.css'],
  providers:[MainCategoryStandardProviderService]
})
export class CatalogHeaderComponent implements OnInit, OnDestroy {
  mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  selectedSubcategories: CatalogSubCategory[] = [];
  subsHidden: boolean = true;
  categoriesSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.route.data.subscribe(data => {
      this.mainCategories = data['mainCategoriesWithSubsAndProds'];
    });
  }

  onMainCategorySelect(mainCategory: CatalogMainCategory) {
    if(this.selectedMainCategory == mainCategory && !this.subsHidden) {
      this.subsHidden = true;
      return;
    }
    this.subsHidden = false;
    this.selectedMainCategory = mainCategory;
    this.selectedSubcategories = mainCategory.subCategories;
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
