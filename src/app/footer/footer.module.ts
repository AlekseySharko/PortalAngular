import {NgModule} from "@angular/core";
import {SiteDecorationModule} from "../shared/site-decoration/site-decoration.module";
import {FooterComponent} from "./footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    SiteDecorationModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {

}
