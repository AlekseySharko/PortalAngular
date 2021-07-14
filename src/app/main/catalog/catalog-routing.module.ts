import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CatalogHomeComponent} from "./catalog-home/catalog-home.component";
import {MainCategoriesWithSubsAndProdsResolverService} from "../../core/services/main/catalog/resolvers/main-categories-with-subs-and-prods-resolver.service";
import {CatalogProductsComponent} from "./catalog-products/catalog-products.component";
import {CatalogComponent} from "./catalog.component";
import {CatalogModeratingRoutingModule} from "./catalog-moderating/catalog-moderating-routing.module";

const catalogRoutes: Routes = [
  { path: '', component:CatalogHomeComponent, resolve: { mainCategoriesWithSubsAndProds: MainCategoriesWithSubsAndProdsResolverService } },
  { path:':category', component:CatalogProductsComponent, resolve: { mainCategoriesWithSubsAndProds: MainCategoriesWithSubsAndProdsResolverService } },
];

@NgModule({
  imports: [
    CatalogModeratingRoutingModule,
    RouterModule.forChild([{
      path: 'catalog',
      component: CatalogComponent,
      children: catalogRoutes }])
  ],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
