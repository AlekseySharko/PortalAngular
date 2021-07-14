import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {NotAuthenticatedGuardService} from "../core/services/guards/not-authenticated-guard.service";

const authRoutes: Routes = [
  { path: 'log-in', component: AuthComponent , data: { 'log-in': true }},
  { path: 'sign-up', component: AuthComponent , data: { 'log-in': false }},
]
const routes: Routes = [
  { path: '', children: authRoutes, canActivate: [NotAuthenticatedGuardService]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
