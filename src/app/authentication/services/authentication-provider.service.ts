import { Injectable } from '@angular/core';
import {ApiOriginService} from "../../services/api-origin.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationData} from "../classes/authentication-data";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationProviderService {

  constructor(private api: ApiOriginService, private http: HttpClient) { }

  logIn(authenticationData: AuthenticationData) {
    return this.http.post(this.api.apiOrigin + "/api/auth/log-in", authenticationData);
  }
}
