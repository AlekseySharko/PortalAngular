import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthenticationProviderService} from "./authentication-provider.service";
import {Observable} from "rxjs";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuardService implements CanActivate {

  constructor(private auth: AuthenticationProviderService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => {
      const isAuth = !!user
      if(isAuth) {
        return true;
      }
      return this.router.createUrlTree(['/log-in']);
    }));
  }
}
