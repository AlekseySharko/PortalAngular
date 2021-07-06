import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";
import {AuthenticationProviderService} from "./services/authentication-provider.service";
import {AuthenticationData} from "./classes/authentication-data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isLogin: boolean = true;
  username: string = '';
  email: string = '';
  password: string = '';
  passwordRepeated: string = '';
  constructor(private authenticationProvider: AuthenticationProviderService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLogin = this.route.snapshot.data['log-in'];
  }

  onSubmitClick() {
    let authenticationData = new AuthenticationData();
    authenticationData.userName = this.username;
    authenticationData.password = this.password;
    this.authenticationProvider.logIn(authenticationData).subscribe(data => {
      console.log(data);
    })
  }

  invalidCheck(control: NgModel) {
    return control.invalid && control.dirty;
  }
}
