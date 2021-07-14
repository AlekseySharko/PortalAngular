import {NgModule} from "@angular/core";
import {CatalogHeaderModule} from "../catalog-header/catalog-header.module";
import {CatalogHomeComponent} from "./catalog-home.component";

@NgModule({
  declarations: [CatalogHomeComponent],
  imports: [CatalogHeaderModule],
  exports: [CatalogHomeComponent]
})
export class CatalogHomeModule {}
