import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {SingleStringDialogComponent} from "./single-string-dialog/single-string-dialog.component";
import {AreYouSureDialogComponent} from "./are-you-sure-dialog/are-you-sure-dialog.component";
import {InformationDialogComponent} from "./information-dialog/information-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    SingleStringDialogComponent,
    AreYouSureDialogComponent,
    InformationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    SingleStringDialogComponent,
    AreYouSureDialogComponent,
    InformationDialogComponent
  ]
})
export class DialogsModule { }
