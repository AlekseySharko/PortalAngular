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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { SingleStringDialogComponent } from './main/dialogs/single-string-dialog/single-string-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatStepperModule} from "@angular/material/stepper";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTreeModule} from "@angular/material/tree";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTooltipModule} from "@angular/material/tooltip";
import {PortalModule} from "@angular/cdk/portal";
import {CdkTableModule} from "@angular/cdk/table";
import {CdkTreeModule} from "@angular/cdk/tree";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {A11yModule} from "@angular/cdk/a11y";
import { AreYouSureDialogComponent } from './main/dialogs/are-you-sure-dialog/are-you-sure-dialog.component';
import { InformationDialogComponent } from './main/dialogs/information-dialog/information-dialog.component';

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
    InformationDialogComponent
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
    MatFormFieldModule
  ],
  providers: [ApiOriginService, RandomProductPictureProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
