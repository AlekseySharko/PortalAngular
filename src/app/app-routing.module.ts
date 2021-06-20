import {RouterModule, Routes} from "@angular/router";
import {CatalogHomeComponent} from "./main/catalog/catalog-home/catalog-home.component";
import {CatalogProductsComponent} from "./main/catalog/catalog-products/catalog-products.component";
import {HomeComponent} from "./main/home/home.component";
import {CatalogComponent} from "./main/catalog/catalog.component";
import {EntertainmentComponent} from "./main/entertainment/entertainment.component";
import {PageNotFoundComponent} from "./main/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {MainCategoriesResolverService} from "./main/catalog/services/resolvers/main-categories-resolver.service";
import {AddProductComponent} from "./main/catalog/catalog-products/moderating/products/add-product/add-product.component";
import {ProductCategoriesResolverService} from "./main/catalog/services/resolvers/product-categories-resolver.service";

const catalogRoutes: Routes = [
  { path:'', component:CatalogHomeComponent, resolve: { mainCategories: MainCategoriesResolverService } },
  { path:':category', component:CatalogProductsComponent, resolve: { mainCategories: MainCategoriesResolverService } },
  { path: 'moderating/product/add', component: AddProductComponent, resolve: { productCategories: ProductCategoriesResolverService } }
];
const entertainmentRoutes: Routes = [

]
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent, children: catalogRoutes },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:  [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
