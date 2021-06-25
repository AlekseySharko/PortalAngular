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
import { AddProductComponent } from './main/catalog/moderating/products/add-product/add-product.component';
import { ProductTemplateComponent } from './main/catalog/moderating/products/product-template/product-template.component';
import { ImageGalleryComponent } from './main/catalog/moderating/products/product-template/image-gallery/image-gallery.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { SingleStringDialogComponent } from './main/dialogs/single-string-dialog/single-string-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { AreYouSureDialogComponent } from './main/dialogs/are-you-sure-dialog/are-you-sure-dialog.component';
import { InformationDialogComponent } from './main/dialogs/information-dialog/information-dialog.component';
import { ProductCategoryInputComponent } from './main/catalog/moderating/products/inputs/product-category-input/product-category-input.component';
import { ProductManufacturerInputComponent } from './main/catalog/moderating/products/inputs/product-manufacturer-input/product-manufacturer-input.component';
import { AddManufacturerDialogComponent } from './main/catalog/moderating/products/dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component';
import { EditProductRelatedEntitiesComponent } from './main/catalog/moderating/products/edit-product-related-entities/edit-product-related-entities.component';
import { AddProductCategoryDialogComponent } from './main/catalog/moderating/products/dialogs/add-product-category-dialog/add-product-category-dialog.component';
import { CatalogMainCategoryInputComponent } from './main/catalog/moderating/products/inputs/catalog-main-category-input/catalog-main-category-input.component';
import { CatalogSubcategoryInputComponent } from './main/catalog/moderating/products/inputs/catalog-subcategory-input/catalog-subcategory-input.component';
import {MatSelectModule} from "@angular/material/select";

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
    ImageGalleryComponent,
    SingleStringDialogComponent,
    AreYouSureDialogComponent,
    InformationDialogComponent,
    ProductCategoryInputComponent,
    ProductManufacturerInputComponent,
    AddManufacturerDialogComponent,
    EditProductRelatedEntitiesComponent,
    AddProductCategoryDialogComponent,
    CatalogMainCategoryInputComponent,
    CatalogSubcategoryInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [ApiOriginService, RandomProductPictureProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
