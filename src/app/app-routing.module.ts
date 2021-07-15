import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./main/home/home.component";
import {EntertainmentComponent} from "./main/entertainment/entertainment.component";
import {PageNotFoundComponent} from "./main/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'catalog', loadChildren: () => import('./main/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports:  [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
