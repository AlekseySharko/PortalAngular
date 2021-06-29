import {Component, Input, OnInit} from '@angular/core';
import {CatalogSubCategory} from "../../classes/catalog-header/catalog-subcategory";

@Component({
  selector: 'app-catalog-subcategories',
  templateUrl: './catalog-subcategories.component.html',
  styleUrls: ['./catalog-subcategories.component.css']
})
export class CatalogSubcategoriesComponent implements OnInit {
  @Input() subcategories:CatalogSubCategory[] = [];
  selectedSubCategory: CatalogSubCategory = new CatalogSubCategory();

  ngOnInit(): void {
  }

  onSubcategoryHover(catalogSubcategory: CatalogSubCategory) {
    this.selectedSubCategory = catalogSubcategory;
  }
}
