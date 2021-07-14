import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {LogInInputsComponent} from "./log-in-inputs/log-in-inputs.component";
import {SignUpInputsComponent} from "./sign-up-inputs/sign-up-inputs.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {DialogsModule} from "../shared/dialogs/dialogs.module";
import {LoadingInformationModule} from "../shared/loading-information/loading-information.module";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    AuthComponent,
    LogInInputsComponent,
    SignUpInputsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    DialogsModule,
    LoadingInformationModule
  ]
})
export class AuthModule { }
