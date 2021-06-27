import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../catalog-classes/catalog-header/catalog-main-category";
import {FormControl, FormGroup} from "@angular/forms";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";

@Component({
  selector: 'app-edit-main-category',
  templateUrl: './edit-main-category.component.html'
})
export class EditMainCategoryComponent implements OnInit {
  @Input() mainCategories: CatalogMainCategory[] = [];
  mainCategoryFormGroup!: FormGroup;

  constructor(private generalValidation: GeneralDataValidatorService) {}

  ngOnInit(): void {
  }

}
