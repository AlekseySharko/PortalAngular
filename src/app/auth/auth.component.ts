import { Component, OnInit } from '@angular/core';
import {AuthenticationProviderService} from "../core/services/authentication/authentication-provider.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogin = true;
  isLoading = false;
  constructor(private authenticationProvider: AuthenticationProviderService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLogin = this.route.snapshot.data['log-in'];
  }
}
