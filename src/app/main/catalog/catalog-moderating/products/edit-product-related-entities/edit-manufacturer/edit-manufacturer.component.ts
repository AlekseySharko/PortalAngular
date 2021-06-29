import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Manufacturer} from "../../../../classes/products/manufacturer";
import {AddManufacturerDialogComponent} from "../../dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {map, startWith} from "rxjs/operators";
import {Filter} from "../../../../classes/helpers/filter";
import {Observable, Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";
import {ProductManufacturerStandardProviderService} from "../../../../services/product-manufacturer-standard-provider.service";
import {AreYouSureDialogComponent} from "../../../../../dialogs/are-you-sure-dialog/are-you-sure-dialog.component";
import {InformationDialogComponent} from "../../../../../dialogs/information-dialog/information-dialog.component";

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html'
})
export class EditManufacturerComponent implements OnInit, OnDestroy {

  @Input() manufacturers: Manufacturer[] = [];
  filteredManufacturerNames!: Observable<string[]>
  manufacturerNameFormControl!: FormControl;
  manufacturerFormGroup!: FormGroup;
  manufacturersSubscription: Subscription = new Subscription();

  constructor(private dialog: MatDialog,
              private generalValidator: GeneralDataValidatorService,
              private manufacturerProvider: ProductManufacturerStandardProviderService) {}

  ngOnInit(): void {
    this.setUpFormGroup();
  }

  onAdd() {
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

  onEdit() {
    if(!this.checkSelection()) return;
    const dialogRef = this.dialog.open(AddManufacturerDialogComponent, {
      width: '24rem',
      data: { edit: true, manufacturer: this.getSelectedManufacturer() }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onDelete() {
    let manufacturer = this.getSelectedManufacturer();
    if(!manufacturer) return;
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '24rem',
      data: {
        question: `Are you sure you want to remove ${manufacturer.name}?`,
        okButton: "Remove",
        cancelButton: "Cancel"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.manufacturerProvider.deleteManufacturer(manufacturer?.manufacturerId ?? 0).subscribe(
        () => {},
        error => {
          const dialogRef = this.dialog.open(InformationDialogComponent, {
            width: '24rem',
            data: {bold: error.error}
          });
          this.onAfterChange(true);
        },
        () => {
          this.onAfterChange(true);
        });
    });
  }

  onAfterChange(result: boolean) {
    if(result) {
      this.manufacturersSubscription = this.manufacturerProvider.getAllManufacturers().subscribe(data => {
        this.manufacturers = data;
        this.manufacturerNameFormControl.reset();
        this.setUpValidators();
        this.setUpAutocomplete();
      });
    }
  }

  setUpFormGroup() {
    this.manufacturerNameFormControl = new FormControl(null);
    this.setUpValidators();
    this.manufacturerFormGroup = new FormGroup({
      'manufacturer-name': this.manufacturerNameFormControl
    });
    this.setUpAutocomplete();
  }

  setUpValidators() {
    this.manufacturerNameFormControl.clearValidators();
    this.manufacturerNameFormControl.setValidators([
      this.generalValidator.getEmptyOrWhiteSpaceValidator,
      this.generalValidator.getInCollectionNameValidator(this.manufacturers, 'NoSuchManufacturer')
    ]);
  }

  setUpAutocomplete() {
    this.filteredManufacturerNames = this.manufacturerNameFormControl.valueChanges
      .pipe(
        startWith(''),
        map(data => Filter.nameFilter(this.manufacturers, data))
      ) ?? new Observable<string[]>();
  }

  checkSelection() {
    return this.manufacturerNameFormControl.valid;
  }

  getSelectedManufacturer() {
    return this.manufacturers
      .find(m => m.name.toLowerCase() === this.manufacturerNameFormControl.value.toLowerCase());
  }

  ngOnDestroy() {
    this.manufacturersSubscription.unsubscribe();
  }
}
