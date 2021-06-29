import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";
import {MatSelectChange} from "@angular/material/select";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html'
})
export class EditProductCategoryComponent implements OnInit {

  @Input() mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  selectedSubCategory: CatalogSubCategory = new CatalogSubCategory();

  constructor(private generalValidation: GeneralDataValidatorService) {}

  ngOnInit(): void {
  }

  onMainCategoryChange(event: MatSelectChange) {
    if(this.selectedMainCategory != event.value) {
      this.selectedMainCategory = event.value;
      this.selectedSubCategory = new CatalogSubCategory();
    }
  }

  onSubCategoryChange(event: MatSelectChange) {
    this.selectedSubCategory = event.value;
  }
}
