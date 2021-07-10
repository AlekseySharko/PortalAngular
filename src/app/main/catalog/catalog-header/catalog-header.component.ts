import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {MainCategoryStandardProviderService} from "../../../core/services/main/catalog/main-category-standard-provider.service";
import {CatalogMainCategory} from "../../../core/classes/main/catalog/catalog-header/catalog-main-category";
import {CatalogSubCategory} from "../../../core/classes/main/catalog/catalog-header/catalog-subcategory";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UpdatedEventProviderService} from "../../../core/services/main/catalog/updated-event-provider.service";

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
  selectedSubcategory: CatalogSubCategory = new CatalogSubCategory();
  subsHidden: boolean = true;
  categoriesSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private mainCategoryProvider: MainCategoryStandardProviderService,
              private updatedEvent: UpdatedEventProviderService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.route.data.subscribe(data => {
      this.mainCategories = data['mainCategoriesWithSubsAndProds'];
    });
    this.updatedEvent.updatedProductRelatedDataSubject.subscribe(() => {
      this.refresh();
    })
  }

  onMainCategorySelect(mainCategory: CatalogMainCategory) {
    if(this.selectedMainCategory == mainCategory && !this.subsHidden) {
      this.subsHidden = true;
      return;
    }
    this.subsHidden = false;
    this.selectedMainCategory = mainCategory;
    this.selectedSubcategories = mainCategory.subCategories;
    this.selectedSubcategory = new CatalogSubCategory();
  }

  refresh() {
    this.mainCategoryProvider.getAllCategories(true, true).subscribe(data => {
      this.mainCategories = data;
    })
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
