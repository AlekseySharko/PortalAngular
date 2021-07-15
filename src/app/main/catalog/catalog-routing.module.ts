import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CatalogHomeComponent} from "./catalog-home/catalog-home.component";
import {MainCategoriesWithSubsAndProdsResolverService} from "../../core/services/main/catalog/resolvers/main-categories-with-subs-and-prods-resolver.service";
import {CatalogProductsComponent} from "./catalog-products/catalog-products.component";

const catalogRoutes: Routes = [
  { path: '', component:CatalogHomeComponent, resolve: { mainCategoriesWithSubsAndProds: MainCategoriesWithSubsAndProdsResolverService } },
  { path: 'moderating', loadChildren: () => import("./catalog-moderating/catalog-moderating.module").then(m => m.CatalogModeratingModule) },
  { path:':category', component:CatalogProductsComponent, resolve: { mainCategoriesWithSubsAndProds: MainCategoriesWithSubsAndProdsResolverService } }
];

@NgModule({
  imports: [
    RouterModule.forChild(catalogRoutes)
  ],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
