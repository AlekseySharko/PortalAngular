import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {HomeComponent} from "./home/home.component";
import {EntertainmentComponent} from "./entertainment/entertainment.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    EntertainmentComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [MainComponent]
})
export class MainModule {

}
