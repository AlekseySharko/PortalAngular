import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CatalogMainCategory} from "../../../../core/classes/main/catalog/catalog-header/catalog-main-category";
import {Manufacturer} from "../../../../core/classes/main/catalog/products/manufacturer";
import {ProductManufacturerResolverService} from "../../../../core/services/main/catalog/resolvers/product-manufacturer-resolver.service";
import {ProductManufacturerStandardProviderService} from "../../../../core/services/main/catalog/product-manufacturer-standard-provider.service";
import {MainCategoryStandardProviderService} from "../../../../core/services/main/catalog/main-category-standard-provider.service";
import {UpdatedEventProviderService} from "../../../../core/services/main/catalog/updated-event-provider.service";

@Component({
  selector: 'app-edit-product-related-entities',
  templateUrl: './edit-product-related-entities.component.html',
  styleUrls: ['./edit-product-related-entities.component.css'],
  providers: [UpdatedEventProviderService]
})
export class EditProductRelatedEntitiesComponent implements OnInit, OnDestroy {
  mainCategoriesWithEverything: CatalogMainCategory[] = [];
  mainCategoriesSubscription: Subscription = new Subscription();
  manufacturers: Manufacturer[] = [];
  manufacturersSubscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute,
              private mainCategoryProvider: MainCategoryStandardProviderService,
              private updatedEvent: UpdatedEventProviderService) { }

  ngOnInit(): void {
    this.mainCategoriesSubscription = this.route.data.subscribe(data => {
      this.mainCategoriesWithEverything = data['mainCategoriesWithSubsAndProds'];
    })
    this.manufacturersSubscription = this.route.data.subscribe(data => {
      this.manufacturers = data['productManufacturers'];
    });
    this.updatedEvent.updatedProductRelatedDataSubject.subscribe(() => {
      this.refreshCategories();
    })
  }

  ngOnDestroy(): void {
    this.mainCategoriesSubscription.unsubscribe();
    this.manufacturersSubscription.unsubscribe();
  }

  refreshCategories() {
    this.mainCategoriesSubscription = this.mainCategoryProvider.getAllCategories(true, true)
      .subscribe(data => {
        this.mainCategoriesWithEverything = data;
      });
  }
}
