import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WeatherComponent } from './header/weather/weather.component';
import { NavListToggleDirective } from './directives/nav-list-toggle.directive';
import { SvgImageComponent } from './header/svg-image/svg-image.component';
import { RightColumnComponent } from './header/right-column/right-column.component';
import { UserBarComponent } from './header/right-column/user-bar/user-bar.component';
import { UnknownUserBarComponent } from './header/right-column/user-bar/unknown-user-bar/unknown-user-bar.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './main/home/home.component';
import { CatalogHomeComponent } from './main/catalog/catalog-home/catalog-home.component';
import { CatalogProductsComponent } from './main/catalog/catalog-products/catalog-products.component';
import { CatalogHeaderComponent } from './main/catalog/catalog-home/catalog-header/catalog-header.component';

const catalogRoutes: Routes = [
  { path:'', component:CatalogHomeComponent },
  { path:':category', component:CatalogProductsComponent },
];
const appRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent, children: catalogRoutes },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WeatherComponent,
    NavListToggleDirective,
    SvgImageComponent,
    RightColumnComponent,
    UserBarComponent,
    UnknownUserBarComponent,
    CatalogComponent,
    HomeComponent,
    CatalogHomeComponent,
    CatalogProductsComponent,
    CatalogHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
