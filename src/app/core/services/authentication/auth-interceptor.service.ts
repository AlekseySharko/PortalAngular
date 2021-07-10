import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationProviderService} from "./authentication-provider.service";
import {exhaustMap, take} from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authProvider: AuthenticationProviderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authProvider.user
      .pipe(
        take(1),
        exhaustMap(user => {
          if(!user) {
            return next.handle(req);
          }
          const authReq = req.clone({
            headers: req.headers.append("Authorization", "Bearer " + user?.token)
          })
          return next.handle(authReq);
        }));
  }
}
