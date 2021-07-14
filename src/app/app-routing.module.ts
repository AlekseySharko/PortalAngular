import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./main/home/home.component";
import {EntertainmentComponent} from "./main/entertainment/entertainment.component";
import {PageNotFoundComponent} from "./main/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {MainRoutingModule} from "./main/main-routing.module";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:  [
    AuthRoutingModule,
    MainRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
