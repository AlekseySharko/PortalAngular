import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  templateUrl: './add-manufacturer-dialog.component.html',
  styleUrls: ['./add-manufacturer-dialog.component.css']
})
export class AddManufacturerDialogComponent implements OnInit {
  manufacturerName: string = '';
  constructor(public dialogRef: MatDialogRef<AddManufacturerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
    this.manufacturerName = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
