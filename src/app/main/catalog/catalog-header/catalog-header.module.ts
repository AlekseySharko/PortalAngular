import {NgModule} from "@angular/core";
import {ProductCategoriesComponent} from "./catalog-subcategories/product-categories/product-categories.component";
import {CatalogSubcategoriesComponent} from "./catalog-subcategories/catalog-subcategories.component";
import {MainCategoryComponent} from "./main-category/main-category.component";
import {CatalogHeaderComponent} from "./catalog-header.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ProductCategoriesComponent,
    CatalogSubcategoriesComponent,
    MainCategoryComponent,
    CatalogHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogHeaderComponent
  ]
})
export class CatalogHeaderModule {}
