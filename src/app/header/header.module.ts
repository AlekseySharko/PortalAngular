import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {WeatherComponent} from "./weather/weather.component";
import {RightColumnComponent} from "./right-column/right-column.component";
import {UserBarComponent} from "./right-column/user-bar/user-bar.component";
import {UserMenuComponent} from "./right-column/user-bar/user-menu/user-menu.component";
import {UnknownUserBarComponent} from "./right-column/user-bar/unknown-user-bar/unknown-user-bar.component";
import {CommonModule} from "@angular/common";
import {StyleHelperModule} from "../shared/style-helper/style-helper.module";
import {SiteDecorationModule} from "../shared/site-decoration/site-decoration.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    HeaderComponent,
    WeatherComponent,
    RightColumnComponent,
    UserBarComponent,
    UserMenuComponent,
    UnknownUserBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    StyleHelperModule,
    SiteDecorationModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {

}
