import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./products/add-product/add-product.component";
import {ProductCategoriesResolverService} from "../../../core/services/main/catalog/resolvers/product-categories-resolver.service";
import {ProductManufacturerResolverService} from "../../../core/services/main/catalog/resolvers/product-manufacturer-resolver.service";
import {EditProductRelatedEntitiesComponent} from "./product-related-entities/edit-product-related-entities.component";
import {MainCategoriesWithSubsAndProdsResolverService} from "../../../core/services/main/catalog/resolvers/main-categories-with-subs-and-prods-resolver.service";
import {RoleGuardService} from "../../../core/services/guards/role-guard.service";

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

@NgModule({
  imports: [
    RouterModule.forChild([{
        path: 'catalog/moderating',
        children: catalogModeratingRoutes,
        canActivate: [RoleGuardService],
        data: {role: 'Catalog Moderator'}
    }])],
  exports: [RouterModule]
})
export class CatalogModeratingRoutingModule {}
