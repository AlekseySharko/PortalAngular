import { NgModule } from '@angular/core';
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {FullScreenLoadingSpinnerComponent} from "./loading-spinner/full-screen-loading-spinner/full-screen-loading-spinner.component";



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FullScreenLoadingSpinnerComponent],
  imports: [],
  exports: [
    FullScreenLoadingSpinnerComponent
  ]
})
export class LoadingInformationModule { }
