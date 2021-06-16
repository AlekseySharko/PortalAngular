import {RouterModule, Routes} from "@angular/router";
import {CatalogHomeComponent} from "./main/catalog/catalog-home/catalog-home.component";
import {CatalogProductsComponent} from "./main/catalog/catalog-products/catalog-products.component";
import {HomeComponent} from "./main/home/home.component";
import {CatalogComponent} from "./main/catalog/catalog.component";
import {EntertainmentComponent} from "./main/entertainment/entertainment.component";
import {PageNotFoundComponent} from "./main/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

const catalogRoutes: Routes = [
  { path:'', component:CatalogHomeComponent },
  { path:':category', component:CatalogProductsComponent },
];
const entertainmentRoutes: Routes = [

]
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent, children: catalogRoutes },
  { path: 'entertainment', component: EntertainmentComponent, children: entertainmentRoutes },
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
