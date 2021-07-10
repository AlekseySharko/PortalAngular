import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Manufacturer} from "../../../../../../core/classes/main/catalog/products/manufacturer";
import {AddManufacturerDialogComponent} from "../../dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {map, startWith} from "rxjs/operators";
import {Filter} from "../../../../../../core/classes/main/catalog/helpers/filter";
import {Observable, Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {GeneralDataValidatorService} from "../../../../../../core/services/general-data-validator.service";
import {ProductManufacturerStandardProviderService} from "../../../../../../core/services/main/catalog/product-manufacturer-standard-provider.service";
import {EditHelperService} from "../../../../../../core/services/main/catalog/products/edit-helper.service";

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
              private editHelper: EditHelperService,
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

    let deleteFunc = this.manufacturerProvider.deleteManufacturer.bind(
      this.manufacturerProvider, manufacturer?.manufacturerId ?? 0);
    let onEnd = this.onAfterChange.bind(this, true);
    this.editHelper.deleteAskingPermission(deleteFunc, manufacturer.name, onEnd, onEnd);
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
