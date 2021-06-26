import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CatalogMainCategory} from "../../../catalog-classes/catalog-header/catalog-main-category";

@Component({
  selector: 'app-edit-product-related-entities',
  templateUrl: './edit-product-related-entities.component.html',
  styleUrls: ['./edit-product-related-entities.component.css']
})
export class EditProductRelatedEntitiesComponent implements OnInit, OnDestroy {
  mainCategoriesWithEverything: CatalogMainCategory[] = [];
  mainCategoriesSubscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mainCategoriesSubscription = this.route.data.subscribe(data => {
      this.mainCategoriesWithEverything = data['mainCategoriesWithSubsAndProds'];
    })
  }

  ngOnDestroy(): void {
    this.mainCategoriesSubscription.unsubscribe();
  }
}
