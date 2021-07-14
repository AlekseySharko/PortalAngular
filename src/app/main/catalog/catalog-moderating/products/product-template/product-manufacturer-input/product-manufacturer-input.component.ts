import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {GeneralDataValidatorService} from "../../../../../../core/services/general-data-validator.service";
import {map, startWith} from "rxjs/operators";
import {Filter} from "../../../../../../core/classes/main/catalog/helpers/filter";
import {Manufacturer} from "../../../../../../core/classes/main/catalog/products/manufacturer";
import {MatDialog} from "@angular/material/dialog";
import {AddManufacturerDialogComponent} from "../../../dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component";
import {ProductManufacturerStandardProviderService} from "../../../../../../core/services/main/catalog/product-manufacturer-standard-provider.service";

@Component({
  selector: 'app-product-manufacturer-input',
  templateUrl: './product-manufacturer-input.component.html',
  styleUrls: ['./product-manufacturer-input.component.css']
})
export class ProductManufacturerInputComponent implements OnInit, OnDestroy {
  @Input() parentFormGroup!: FormGroup;
  manufacturers: Manufacturer[] = [];
  filteredManufacturerNames!: Observable<string[]>
  manufacturerNameFormControl: FormControl = new FormControl(null);
  manufacturerFormControl: FormControl = new FormControl(null);
  manufacturersSubscription: Subscription = new Subscription();

  constructor(private dialog: MatDialog,
              private generalValidator: GeneralDataValidatorService,
              private manufacturerProvider: ProductManufacturerStandardProviderService) {}

  ngOnInit(){
    this.manufacturersSubscription = this.manufacturerProvider.getAllManufacturers().subscribe(data => {
      this.manufacturers = data;
      this.setUpFormGroup();
    })
  }

  setUpFormGroup() {
    this.setUpNameValidators();
    this.setUpManufacturerValidators();
    this.setUpAutocomplete();
    this.setUpNameManufactureCorrespondence();
    this.parentFormGroup.addControl('manufacturer-name', this.manufacturerNameFormControl);
    this.parentFormGroup.addControl('manufacturer', this.manufacturerFormControl);
  }

  setUpNameValidators() {
    this.manufacturerNameFormControl.clearValidators();
    this.manufacturerNameFormControl.setValidators([
      this.generalValidator.getEmptyOrWhiteSpaceValidator,
      this.generalValidator.getInCollectionNameValidator(this.manufacturers, 'NoSuchManufacturer')
    ]);
  }

  setUpManufacturerValidators() {
    this.manufacturerFormControl.setValidators([
      (control: AbstractControl) => {
        if(this.manufacturerNameFormControl.value === this.manufacturerFormControl.value?.name) {
          return null;
        }
        return { "manufacturerError": true };
      }
    ]);
  }

  setUpAutocomplete() {
    this.filteredManufacturerNames = this.manufacturerNameFormControl.valueChanges
      .pipe(
        startWith(''),
        map(data => Filter.nameFilter(this.manufacturers, data))
      ) ?? new Observable<string[]>();
  }

  setUpNameManufactureCorrespondence() {
    this.manufacturerNameFormControl.valueChanges.subscribe( data => {
      this.manufacturerFormControl.setValue(this.manufacturers.find(m => m.name === data));
    })
  }

  onAddManufacturer() {
    let inputManufacturer = new Manufacturer();
    inputManufacturer.name = this.manufacturerNameFormControl?.value;
    const dialogRef = this.dialog.open(AddManufacturerDialogComponent, {
      width: '24rem',
      data: {edit: false, manufacturer: inputManufacturer}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onAfterChange(result: boolean) {
    if(result) {
      this.manufacturersSubscription = this.manufacturerProvider.getAllManufacturers().subscribe(data => {
        this.manufacturers = data;
        this.manufacturerNameFormControl.reset();
        this.setUpNameValidators();
        this.setUpAutocomplete();
      });
    }
  }

  ngOnDestroy() {
    this.manufacturersSubscription.unsubscribe();
  }
}
