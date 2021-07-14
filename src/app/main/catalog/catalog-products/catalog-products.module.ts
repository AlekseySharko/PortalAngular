import {NgModule} from "@angular/core";
import {CatalogHeaderModule} from "../catalog-header/catalog-header.module";
import {CatalogProductsComponent} from "./catalog-products.component";

@NgModule({
  declarations: [CatalogProductsComponent],
  imports: [CatalogHeaderModule],
  exports: [CatalogProductsComponent]
})
export class CatalogProductsModule {}
