import {NgModule} from "@angular/core";
import {CatalogComponent} from "./catalog.component";
import {CatalogHomeModule} from "./catalog-home/catalog-home.module";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CatalogModeratingModule} from "./catalog-moderating/catalog-moderating.module";
import {CatalogProductsModule} from "./catalog-products/catalog-products.module";

@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CatalogHomeModule,
    CatalogRoutingModule,
    CatalogModeratingModule,
    CatalogProductsModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule {

}
