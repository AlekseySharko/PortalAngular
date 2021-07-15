import {NgModule} from "@angular/core";
import {CatalogComponent} from "./catalog.component";
import {CatalogHomeModule} from "./catalog-home/catalog-home.module";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CatalogProductsModule} from "./catalog-products/catalog-products.module";

@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CatalogHomeModule,
    CatalogRoutingModule,
    CatalogProductsModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule {

}
