import {RouterModule, Routes} from "@angular/router";
import {CatalogHomeComponent} from "./main/catalog/catalog-home/catalog-home.component";
import {CatalogProductsComponent} from "./main/catalog/catalog-products/catalog-products.component";
import {HomeComponent} from "./main/home/home.component";
import {CatalogComponent} from "./main/catalog/catalog.component";
import {EntertainmentComponent} from "./main/entertainment/entertainment.component";
import {PageNotFoundComponent} from "./main/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {MainCategoriesResolverService} from "./core/services/main/catalog/resolvers/main-categories-resolver.service";
import {AddProductComponent} from "./main/catalog/catalog-moderating/products/add-product/add-product.component";
import {ProductCategoriesResolverService} from "./core/services/main/catalog/resolvers/product-categories-resolver.service";
import {ProductManufacturerResolverService} from "./core/services/main/catalog/resolvers/product-manufacturer-resolver.service";
import {EditProductRelatedEntitiesComponent} from "./main/catalog/catalog-moderating/products/edit-product-related-entities/edit-product-related-entities.component";
import {MainCategoriesWithSubsAndProdsResolverService} from "./core/services/main/catalog/resolvers/main-categories-with-subs-and-prods-resolver.service";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {NotAuthenticatedGuardService} from "./core/services/authentication/not-authenticated-guard.service";
import {RoleGuardService} from "./core/services/authentication/role-guard.service";

const catalogModeratingRoutes: Routes = [
  { path: 'product/add', component: AddProductComponent, resolve: {
      productCategories: ProductCategoriesResolverService,
      productManufacturers: ProductManufacturerResolverService
    }
  },
  { path: 'product-related/edit',
    component: EditProductRelatedEntitiesComponent,
    runGuardsAndResolvers: "always",
    resolve: {
      mainCategoriesWithSubsAndProds: MainCategoriesWithSubsAndProdsResolverService,
      productManufacturers: ProductManufacturerResolverService
    }
  },
];
const catalogRoutes: Routes = [
  { path: '', component:CatalogHomeComponent, resolve: { mainCategoriesWithSubsAndProds: MainCategoriesWithSubsAndProdsResolverService } },
  { path: 'moderating', children: catalogModeratingRoutes, canActivate: [RoleGuardService], data: {role: 'Catalog Moderator'}},
  { path:':category', component:CatalogProductsComponent, resolve: { mainCategories: MainCategoriesResolverService } },
];
const entertainmentRoutes: Routes = [

]
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent, children: catalogRoutes },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'log-in', component: AuthenticationComponent , data: { 'log-in': true }, canActivate: [NotAuthenticatedGuardService]},
  { path: 'sign-up', component: AuthenticationComponent , data: { 'log-in': false }, canActivate: [NotAuthenticatedGuardService]},
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
