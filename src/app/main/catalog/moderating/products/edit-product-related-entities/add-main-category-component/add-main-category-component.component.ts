import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogMainCategory} from "../../../../catalog-classes/catalog-header/catalog-main-category";
import {Observable, Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";
import {map, startWith} from "rxjs/operators";
import {Filter} from "../../../../catalog-classes/helpers/filter";

@Component({
  selector: 'app-add-main-category-component',
  templateUrl: './add-main-category-component.component.html',
  styleUrls: ['./add-main-category-component.component.css']
})
export class AddMainCategoryComponentComponent implements OnInit {
  @Input() mainCategories: CatalogMainCategory[] = [];
  filteredMainCategoryNames!: Observable<string[]>;
  mainCategoryFormGroup!: FormGroup;
  mainCategoryNameFormControl!: FormControl;

  constructor(private generalValidation: GeneralDataValidatorService) {}

  ngOnInit(): void {
    this.setUpFormGroup();
    this.setUpAutocomplete();
  }

  setUpFormGroup() {
    this.mainCategoryNameFormControl = new FormControl(null, [
      this.generalValidation.getEmptyOrWhiteSpaceValidator(),
      this.generalValidation.getInCollectionNameValidator(this.mainCategories,'NoSuchMainCategory')
    ]);
    this.mainCategoryFormGroup = new FormGroup({
      'main-category-name': this.mainCategoryNameFormControl
    });
  }

  setUpAutocomplete() {
    this.filteredMainCategoryNames = this.mainCategoryNameFormControl.valueChanges
      .pipe(
        startWith(''),
        map(data => Filter.nameFilter(this.mainCategories, data))
      ) ?? new Observable<string[]>();
  }

  checkNameValidation() {
    return this.mainCategoryNameFormControl?.valid || !this.mainCategoryNameFormControl?.touched;
  }
}
