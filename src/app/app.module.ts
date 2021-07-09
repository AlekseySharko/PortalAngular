import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WeatherComponent } from './header/weather/weather.component';
import { NavListToggleDirective } from './core/directives/nav-list-toggle.directive';
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
import {ApiOriginService} from "./core/services/api-origin.service";
import { ProductCategoriesComponent } from './main/catalog/catalog-header/catalog-subcategories/product-categories/product-categories.component';
import {RandomProductPictureProviderService} from "./main/catalog/services/random-product-picture-provider.service";
import { TestOneComponent } from './main/entertainment/test-one/test-one.component';
import { TestTwoComponent } from './main/entertainment/test-one/test-two/test-two.component';
import { AddProductComponent } from './main/catalog/catalog-moderating/products/add-product/add-product.component';
import { ProductTemplateComponent } from './main/catalog/catalog-moderating/products/product-template/product-template.component';
import { ImageGalleryComponent } from './main/catalog/catalog-moderating/products/product-template/image-gallery/image-gallery.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { SingleStringDialogComponent } from './main/dialogs/single-string-dialog/single-string-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { AreYouSureDialogComponent } from './main/dialogs/are-you-sure-dialog/are-you-sure-dialog.component';
import { InformationDialogComponent } from './main/dialogs/information-dialog/information-dialog.component';
import { ProductCategoryInputComponent } from './main/catalog/catalog-moderating/products/product-template/product-category-input/product-category-input.component';
import { ProductManufacturerInputComponent } from './main/catalog/catalog-moderating/products/product-template/product-manufacturer-input/product-manufacturer-input.component';
import { AddManufacturerDialogComponent } from './main/catalog/catalog-moderating/products/dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component';
import { EditProductRelatedEntitiesComponent } from './main/catalog/catalog-moderating/products/edit-product-related-entities/edit-product-related-entities.component';
import { AddProductCategoryDialogComponent } from './main/catalog/catalog-moderating/products/dialogs/add-product-category-dialog/add-product-category-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import { EditMainCategoryComponent } from './main/catalog/catalog-moderating/products/edit-product-related-entities/edit-main-category/edit-main-category.component';
import { EditSubCategoryComponent } from './main/catalog/catalog-moderating/products/edit-product-related-entities/edit-sub-category/edit-sub-category.component';
import { EditProductCategoryComponent } from './main/catalog/catalog-moderating/products/edit-product-related-entities/edit-product-category/edit-product-category.component';
import { EditManufacturerComponent } from './main/catalog/catalog-moderating/products/edit-product-related-entities/edit-manufacturer/edit-manufacturer.component';
import { AddMainCategoryDialogComponent } from './main/catalog/catalog-moderating/products/dialogs/add-main-category-dialog/add-main-category-dialog.component';
import { AddSubCategoryDialogComponent } from './main/catalog/catalog-moderating/products/dialogs/add-sub-category-dialog/add-sub-category-dialog.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {MatButton, MatButtonModule} from "@angular/material/button";
import { LogInInputsComponent } from './authentication/log-in-inputs/log-in-inputs.component';
import { SignUpInputsComponent } from './authentication/sign-up-inputs/sign-up-inputs.component';
import { LoaderComponent } from './core/common-components/loader/loader.component';
import { FullScreenLoaderComponent } from './core/common-components/loader/full-screen-loader/full-screen-loader.component';

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
    EditMainCategoryComponent,
    EditSubCategoryComponent,
    EditProductCategoryComponent,
    EditManufacturerComponent,
    AddMainCategoryDialogComponent,
    AddSubCategoryDialogComponent,
    AuthenticationComponent,
    LogInInputsComponent,
    SignUpInputsComponent,
    LoaderComponent,
    FullScreenLoaderComponent
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
    MatSelectModule,
    MatButtonModule
  ],
  providers: [ApiOriginService, RandomProductPictureProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
