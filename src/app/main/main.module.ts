import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {CatalogModule} from "./catalog/catalog.module";

@NgModule({
  declarations: [],
  imports: [
    CatalogModule
  ],
  exports: [MainComponent]
})
export class MainModule {

}
