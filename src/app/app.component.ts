import {Component, OnInit} from '@angular/core';
import {AuthenticationProviderService} from "./core/services/authentication/authentication-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthenticationProviderService) {}

  ngOnInit(): void {
    this.auth.logInFromStorage();
  }
}
