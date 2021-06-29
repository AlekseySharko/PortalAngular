import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Manufacturer} from "../../../../classes/products/manufacturer";
import {ProductManufacturerStandardProviderService} from "../../../../services/product-manufacturer-standard-provider.service";
import {Subscription} from "rxjs";
import {InformationDialogComponent} from "../../../../../dialogs/information-dialog/information-dialog.component";

export interface AddManufacturerData {
  edit: boolean;
  manufacturer: Manufacturer;
}

@Component({
  templateUrl: './add-manufacturer-dialog.component.html',
  styleUrls: ['./add-manufacturer-dialog.component.css']
})
export class AddManufacturerDialogComponent implements OnInit, OnDestroy {
  manufacturerName: string = '';
  manufacturerCountry: string = '';
  httpSubscription: Subscription = new Subscription();

  constructor(private dialogRef: MatDialogRef<AddManufacturerDialogComponent>,
              private manufacturerProvider: ProductManufacturerStandardProviderService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: AddManufacturerData) {}

  ngOnInit(): void {
    this.manufacturerName = this.data.manufacturer.name;
    this.manufacturerCountry = this.data.manufacturer.country;
  }

  onAddClick() {
    let manufacturerToSend = new Manufacturer();
    manufacturerToSend.name = this.manufacturerName;
    manufacturerToSend.country = this.manufacturerCountry;
    let methodToSend;

    if(this.data.edit) {
      manufacturerToSend.manufacturerId = this.data.manufacturer.manufacturerId;
      methodToSend = this.manufacturerProvider.putManufacturer.bind(this.manufacturerProvider);
    } else {
      methodToSend = this.manufacturerProvider.postManufacturer.bind(this.manufacturerProvider);
    }

    this.httpSubscription = methodToSend(manufacturerToSend).subscribe(
      () => {},
      error => {
        this.dialog.open(InformationDialogComponent, {
          width: '24rem',
          data: {bold: error.error}
        });
        this.dialogRef.close(true);
      },
      () => {
        this.dialogRef.close(true);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }
}
