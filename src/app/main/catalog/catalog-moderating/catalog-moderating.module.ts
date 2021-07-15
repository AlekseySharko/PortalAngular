import {NgModule} from "@angular/core";
import {CatalogHeaderModule} from "../catalog-header/catalog-header.module";
import {AddMainCategoryDialogComponent} from "./dialogs/add-main-category-dialog/add-main-category-dialog.component";
import {AddManufacturerDialogComponent} from "./dialogs/add-manufacturer-dialog/add-manufacturer-dialog.component";
import {AddProductCategoryDialogComponent} from "./dialogs/add-product-category-dialog/add-product-category-dialog.component";
import {AddSubCategoryDialogComponent} from "./dialogs/add-sub-category-dialog/add-sub-category-dialog.component";
import {EditMainCategoryComponent} from "./product-related-entities/edit-main-category/edit-main-category.component";
import {EditManufacturerComponent} from "./product-related-entities/edit-manufacturer/edit-manufacturer.component";
import {EditProductCategoryComponent} from "./product-related-entities/edit-product-category/edit-product-category.component";
import {EditSubCategoryComponent} from "./product-related-entities/edit-sub-category/edit-sub-category.component";
import {EditProductRelatedEntitiesComponent} from "./product-related-entities/edit-product-related-entities.component";
import {AddProductComponent} from "./products/add-product/add-product.component";
import {ProductTemplateComponent} from "./products/product-template/product-template.component";
import {ProductManufacturerInputComponent} from "./products/product-template/product-manufacturer-input/product-manufacturer-input.component";
import {ProductCategoryInputComponent} from "./products/product-template/product-category-input/product-category-input.component";
import {ImageGalleryComponent} from "./products/product-template/image-gallery/image-gallery.component";
import {CatalogModeratingRoutingModule} from "./catalog-moderating-routing.module";
import {CommonModule} from "@angular/common";
import {DialogsModule} from "../../../shared/dialogs/dialogs.module";
import {LoadingInformationModule} from "../../../shared/loading-information/loading-information.module";
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
    AddMainCategoryDialogComponent,
    AddManufacturerDialogComponent,
    AddProductCategoryDialogComponent,
    AddSubCategoryDialogComponent,
    EditMainCategoryComponent,
    EditManufacturerComponent,
    EditProductCategoryComponent,
    EditSubCategoryComponent,
    EditProductRelatedEntitiesComponent,
    AddProductComponent,
    ProductTemplateComponent,
    ProductManufacturerInputComponent,
    ProductCategoryInputComponent,
    ImageGalleryComponent
  ],
  imports: [
    CatalogHeaderModule,
    CatalogModeratingRoutingModule,
    CommonModule,
    DialogsModule,
    LoadingInformationModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})
export class CatalogModeratingModule {}
