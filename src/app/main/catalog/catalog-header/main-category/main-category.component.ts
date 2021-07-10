import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../core/classes/main/catalog/catalog-header/catalog-main-category";

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {
  @Input() mainCategory: CatalogMainCategory = new CatalogMainCategory();
  constructor() {}

  ngOnInit(): void {
  }
}
