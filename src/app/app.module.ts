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
import { HomeComponent } from './main/home/home.component';
import { CatalogHomeComponent } from './main/catalog/catalog-home/catalog-home.component';
import { CatalogProductsComponent } from './main/catalog/catalog-products/catalog-products.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { CatalogHeaderComponent } from "./main/catalog/catalog-header/catalog-header.component";
import { CatalogSubcategoriesComponent } from './main/catalog/catalog-header/catalog-subcategories/catalog-subcategories.component';
import { EntertainmentComponent } from './main/entertainment/entertainment.component';
import { AppRoutingModule } from "./app-routing.module";
import { MainCategoryComponent } from './main/catalog/catalog-header/main-category/main-category.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiOriginService} from "./services/api-origin.service";
import { ProductCategoriesComponent } from './main/catalog/catalog-header/catalog-subcategories/product-categories/product-categories.component';
import {RandomProductPictureProviderService} from "./main/catalog/services/random-product-picture-provider.service";
import { TestOneComponent } from './main/entertainment/test-one/test-one.component';
import { TestTwoComponent } from './main/entertainment/test-one/test-two/test-two.component';
import { AddProductComponent } from './main/catalog/catalog-products/moderating/products/add-product/add-product.component';
import { ProductTemplateComponent } from './main/catalog/catalog-products/moderating/products/product-template/product-template.component';
import { ImageGalleryComponent } from './main/catalog/catalog-products/moderating/products/product-template/image-gallery/image-gallery.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    CatalogHeaderComponent,
    PageNotFoundComponent,
    CatalogSubcategoriesComponent,
    EntertainmentComponent,
    MainCategoryComponent,
    ProductCategoriesComponent,
    TestOneComponent,
    TestTwoComponent,
    AddProductComponent,
    ProductTemplateComponent,
    ImageGalleryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [ApiOriginService, RandomProductPictureProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
