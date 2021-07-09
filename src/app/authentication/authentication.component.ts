import { Component, OnInit } from '@angular/core';
import {AuthenticationProviderService} from "./services/authentication-provider.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isLogin = true;
  isLoading = false;
  constructor(private authenticationProvider: AuthenticationProviderService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLogin = this.route.snapshot.data['log-in'];
  }
}
