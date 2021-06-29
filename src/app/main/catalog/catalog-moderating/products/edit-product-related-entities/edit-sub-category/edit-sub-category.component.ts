import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html'
})
export class EditSubCategoryComponent implements OnInit {

  @Input() mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  subCategoryFormGroup!: FormGroup;

  constructor(private generalValidation: GeneralDataValidatorService) {}

  ngOnInit(): void {
  }

  setUpOnMainCategoryChange(event: MatSelectChange) {
    this.selectedMainCategory = event.value;
  }
}
