import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthenticationProviderService} from "./authentication-provider.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private auth: AuthenticationProviderService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role: string = route.data['role'];
    if(!role) {
      return false;
    }
    return this.auth.checkRole(role)
      .pipe(catchError(err => {
        if(err?.status !== 401) {
          return throwError(err);
        }
        return new Observable<boolean>( sub => sub.next(false));
      }));
  }
}
