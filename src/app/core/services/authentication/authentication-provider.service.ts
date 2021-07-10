import { Injectable } from '@angular/core';
import {ApiOriginService} from "../api-origin.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationData} from "../../classes/authentication/authentication-data";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationProviderService {

  constructor(private api: ApiOriginService, private http: HttpClient) { }

  logIn(authenticationData: AuthenticationData) {
    return this.http.post(this.api.apiOrigin + "/api/auth/log-in", authenticationData);
  }
  signUp(authenticationData: AuthenticationData) {
    return this.http.post(this.api.apiOrigin + "/api/auth/sign-up", authenticationData);
  }

}
