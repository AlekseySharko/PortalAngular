import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {CatalogModule} from "./catalog/catalog.module";
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
    RouterModule,
    CatalogModule
  ],
  exports: [MainComponent]
})
export class MainModule {

}
