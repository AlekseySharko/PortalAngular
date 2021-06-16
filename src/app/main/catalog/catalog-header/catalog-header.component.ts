import { Component, OnInit } from '@angular/core';
import {MainCategoryStandardProviderService} from "./services/main-category-standard-provider.service";
import {CatalogMainCategory} from "./catalog-categories-classes/catalog-main-category";
import {CatalogSubCategory} from "./catalog-categories-classes/catalog-subcategory";
import {SubCategoryStandardProviderService} from "./services/sub-category-standard-provider.service";

@Component({
  selector: 'app-catalog-header',
  templateUrl: './catalog-header.component.html',
  styleUrls: ['./catalog-header.component.css'],
  providers:[MainCategoryStandardProviderService]
})
export class CatalogHeaderComponent implements OnInit {
  mainCategories: CatalogMainCategory[] = [];
  selectedSubcategories: CatalogSubCategory[] = [];
  constructor(private mainCategoryProvider: MainCategoryStandardProviderService,
              private subCategoryStandardProviderService: SubCategoryStandardProviderService) { }

  ngOnInit(): void {
    this.mainCategoryProvider.getAllCategories().subscribe((c: CatalogMainCategory[]) => {
      this.mainCategories = c;
      this.onMainCategorySelect(this.mainCategories[0]?.catalogMainCategoryId);
    });
  }

  onMainCategorySelect(mainCategoryId:number) {
    this.subCategoryStandardProviderService.getSubCategories(mainCategoryId).subscribe(
      (sc: CatalogSubCategory[]) => this.selectedSubcategories = sc
    )
  }
}
