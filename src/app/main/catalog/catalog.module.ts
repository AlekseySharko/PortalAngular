import {NgModule} from "@angular/core";
import {MainComponent} from "../main.component";
import {CatalogComponent} from "./catalog.component";
import {HomeComponent} from "../home/home.component";
import {CatalogHomeComponent} from "./catalog-home/catalog-home.component";
import {CatalogProductsComponent} from "./catalog-products/catalog-products.component";
import {CatalogHeaderComponent} from "./catalog-header/catalog-header.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {CatalogSubcategoriesComponent} from "./catalog-header/catalog-subcategories/catalog-subcategories.component";
import {EntertainmentComponent} from "../entertainment/entertainment.component";
import {MainCategoryComponent} from "./catalog-header/main-category/main-category.component";
import {ProductCategoriesComponent} from "./catalog-header/catalog-subcategories/product-categories/product-categories.component";
import {TestOneComponent} from "../entertainment/test-one/test-one.component";
import {TestTwoComponent} from "../entertainment/test-one/test-two/test-two.component";
import {AddProductComponent} from "./catalog-moderating/products/add-product/add-product.component";
import {ProductTemplateComponent} from "./catalog-moderating/products/product-template/product-template.component";
import {ImageGalleryComponent} from "./catalog-moderating/products/product-template/image-gallery/image-gallery.component";
import {ProductCategoryInputComponent} from "./catalog-moderating/products/product-template/product-category-input/product-category-input.component";
import {ProductManufacturerInputComponent} from "./catalog-moderating/products/product-template/product-manufacturer-input/product-manufacturer-input.component";
import {AddManufacturerDialogComponent} from "./catalog-moderating/products/dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component";
import {EditProductRelatedEntitiesComponent} from "./catalog-moderating/products/edit-product-related-entities/edit-product-related-entities.component";
import {AddProductCategoryDialogComponent} from "./catalog-moderating/products/dialogs/add-product-category-dialog/add-product-category-dialog.component";
import {EditMainCategoryComponent} from "./catalog-moderating/products/edit-product-related-entities/edit-main-category/edit-main-category.component";
import {EditSubCategoryComponent} from "./catalog-moderating/products/edit-product-related-entities/edit-sub-category/edit-sub-category.component";
import {EditProductCategoryComponent} from "./catalog-moderating/products/edit-product-related-entities/edit-product-category/edit-product-category.component";
import {EditManufacturerComponent} from "./catalog-moderating/products/edit-product-related-entities/edit-manufacturer/edit-manufacturer.component";
import {AddMainCategoryDialogComponent} from "./catalog-moderating/products/dialogs/add-main-category-dialog/add-main-category-dialog.component";
import {AddSubCategoryDialogComponent} from "./catalog-moderating/products/dialogs/add-sub-category-dialog/add-sub-category-dialog.component";
import {CommonModule} from "@angular/common";
import {MainRoutingModule} from "../main-routing.module";
import {DialogsModule} from "../../shared/dialogs/dialogs.module";
import {LoadingInformationModule} from "../../shared/loading-information/loading-information.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    MainComponent,
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
    AddSubCategoryDialogComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    DialogsModule,
    LoadingInformationModule,
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
  exports: [MainComponent]
})
export class CatalogModule {

}
