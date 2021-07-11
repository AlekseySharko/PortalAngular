import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationProviderService} from "./authentication-provider.service";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuardService implements CanActivate {

  constructor(private auth: AuthenticationProviderService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => !user));
  }
}
