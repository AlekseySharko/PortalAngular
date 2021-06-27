import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CatalogMainCategory} from "../../../catalog-classes/catalog-header/catalog-main-category";
import {Manufacturer} from "../../../catalog-classes/products/manufacturer";
import {ProductManufacturerResolverService} from "../../../services/resolvers/product-manufacturer-resolver.service";
import {ProductManufacturerStandardProviderService} from "../../../services/product-manufacturer-standard-provider.service";

@Component({
  selector: 'app-edit-product-related-entities',
  templateUrl: './edit-product-related-entities.component.html',
  styleUrls: ['./edit-product-related-entities.component.css']
})
export class EditProductRelatedEntitiesComponent implements OnInit, OnDestroy {
  mainCategoriesWithEverything: CatalogMainCategory[] = [];
  mainCategoriesSubscription: Subscription = new Subscription();
  manufacturers: Manufacturer[] = [];
  manufacturersSubscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute)
  { }

  ngOnInit(): void {
    this.mainCategoriesSubscription = this.route.data.subscribe(data => {
      this.mainCategoriesWithEverything = data['mainCategoriesWithSubsAndProds'];
    })
    this.manufacturersSubscription = this.route.data.subscribe(data => {
      this.manufacturers = data['productManufacturers'];
    })
  }

  ngOnDestroy(): void {
    this.mainCategoriesSubscription.unsubscribe();
    this.manufacturersSubscription.unsubscribe();
  }
}
