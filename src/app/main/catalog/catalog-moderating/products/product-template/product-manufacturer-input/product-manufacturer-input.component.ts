import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {GeneralDataValidatorService} from "../../../../../../services/general-data-validator.service";
import {ActivatedRoute} from "@angular/router";
import {map, startWith} from "rxjs/operators";
import {Filter} from "../../../../classes/helpers/filter";
import {Manufacturer} from "../../../../classes/products/manufacturer";
import {MatDialog} from "@angular/material/dialog";
import {AddManufacturerDialogComponent} from "../../dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component";

@Component({
  selector: 'app-product-manufacturer-input',
  templateUrl: './product-manufacturer-input.component.html',
  styleUrls: ['./product-manufacturer-input.component.css']
})
export class ProductManufacturerInputComponent implements OnInit {
  @Input() parentFormGroup!: FormGroup;
  productManufacturerFormControl!: FormControl;
  productManufacturers: Manufacturer[] = [];
  productManufacturerSubscription: Subscription = new Subscription();
  filteredProductManufacturerNames!: Observable<string[]>;

  constructor(private generalValidation: GeneralDataValidatorService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit()  {
    this.productManufacturerSubscription = this.route.data.subscribe(data => {
      this.productManufacturers = data['productManufacturers'];
      this.productManufacturerFormControl = new FormControl(null, [
        this.generalValidation.getEmptyOrWhiteSpaceValidator(),
        this.generalValidation.getInCollectionNameValidator(this.productManufacturers,'NoSuchManufacturer')
      ]);
      this.parentFormGroup.addControl('manufacturer', this.productManufacturerFormControl);
      this.setUpAutocomplete();
    });
  }

  onAddManufacturer() {
    let inputManufacturer = new Manufacturer();
    inputManufacturer.name = this.productManufacturerFormControl?.value;
    const dialogRef = this.dialog.open(AddManufacturerDialogComponent, {
      width: '24rem',
      data: {edit: false, manufacturer: inputManufacturer}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
    });
  }

  setUpAutocomplete() {
    this.filteredProductManufacturerNames = this.productManufacturerFormControl.valueChanges
      .pipe(
        startWith(''),
        map(data => Filter.nameFilter(this.productManufacturers, data))
      ) ?? new Observable<string[]>();
  }

  checkValidation(controlPath:string) {
    let control = this.parentFormGroup.get(controlPath);
    return control?.valid || !control?.touched;
  }
}
