import { Injectable } from '@angular/core';
import {ApiOriginService} from "../api-origin.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthenticationData} from "../../classes/authentication/authentication-data";
import {LoginSuccessfulData} from "../../classes/authentication/login-successful-data";
import { tap} from "rxjs/operators";
import {User} from "../../classes/authentication/user";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationProviderService {
  user = new BehaviorSubject<User|null>(null);
  private localStorageItemName:string = 'userData';
  private tokenExpirationTimer!: number;
  constructor(private api: ApiOriginService,
              private http: HttpClient,
              private router: Router) { }

  signUp(authenticationData: AuthenticationData) {
    return this.http.post(this.api.apiOrigin + "/api/auth/sign-up", authenticationData);
  }
  logIn(authenticationData: AuthenticationData) {
    return this.http.post<LoginSuccessfulData>(this.api.apiOrigin + "/api/auth/log-in", authenticationData).pipe(
      tap(loginData => {
        let user = this.getUser(loginData);
        this.user.next(user);
        this.setAutoExpireTimeout(user);
      })
    );
  }
  logInFromStorage() {
    let userData;
    try{
      userData = JSON.parse(localStorage.getItem(this.localStorageItemName) ?? '');
    }
    catch (e) {}
    if(!userData || !userData.userName || !userData._token || !userData._tokenExpirationDate) {
      return;
    }
    const user =
      new User(userData.userName, userData.image ?? '', userData._token, new Date(userData._tokenExpirationDate));
    if(user.token) {
      this.user.next(user);
      this.setAutoExpireTimeout(user);
    }
  }
  logOut() {
    this.user.next(null);
    localStorage.removeItem(this.localStorageItemName);
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.router.navigate(['/']);
  }
  checkRole(role: string) {
    return this.http.get<boolean>(this.api.apiOrigin + "/api/auth/role", {
      params: new HttpParams().set("role", role)
    });
  }


  private setAutoExpireTimeout(user: User) {
    let expiration = user.getExpirationTicksLeft();
    if(!expiration || expiration < 1) {
      this.logOut();
      return;
    }
    if(expiration > 1728999) {
      return;
    }
    this.tokenExpirationTimer = setTimeout(() => {
      this.tokenExpirationTimer = 0;
      this.logOut();
    }, expiration);
  }
  private getUser(loginData: LoginSuccessfulData) {
    const expirationDate = this.getExpirationDateFromToken(loginData.token);
    if(!expirationDate) {
      throw { error: "Can't evaluate your token" };
    }
    const user: User = new User(loginData.userName, loginData.Image, loginData.token, expirationDate);
    localStorage.setItem(this.localStorageItemName, JSON.stringify(user));
    return user;
  }
  private getExpirationDateFromToken(token:string) {
    if(!token) return null;
    let expirationDate: Date;
    try{
      let jwtPayload = atob(token.split('.')?.[1]);
      expirationDate = new Date(1000 * JSON.parse(jwtPayload).exp);
    }
    catch (e) {
      return null;
    }
    if(!expirationDate || expirationDate < new Date()) return null;
    return expirationDate;
  }
}
