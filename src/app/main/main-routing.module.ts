import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog/catalog.component";
import {AddProductComponent} from "./catalog/catalog-moderating/products/add-product/add-product.component";
import {ProductCategoriesResolverService} from "../core/services/main/catalog/resolvers/product-categories-resolver.service";
import {ProductManufacturerResolverService} from "../core/services/main/catalog/resolvers/product-manufacturer-resolver.service";
import {EditProductRelatedEntitiesComponent} from "./catalog/catalog-moderating/products/edit-product-related-entities/edit-product-related-entities.component";
import {MainCategoriesWithSubsAndProdsResolverService} from "../core/services/main/catalog/resolvers/main-categories-with-subs-and-prods-resolver.service";
import {CatalogHomeComponent} from "./catalog/catalog-home/catalog-home.component";
import {RoleGuardService} from "../core/services/guards/role-guard.service";
import {CatalogProductsComponent} from "./catalog/catalog-products/catalog-products.component";
import {MainCategoriesResolverService} from "../core/services/main/catalog/resolvers/main-categories-resolver.service";

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
const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, children: catalogRoutes }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
