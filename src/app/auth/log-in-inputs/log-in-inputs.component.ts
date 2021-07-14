import { Component, OnInit } from '@angular/core';
import {AuthenticationProviderService} from "../../core/services/authentication/authentication-provider.service";
import {Subscription} from "rxjs";
import {DialogMessageHandlerService} from "../../shared/dialogs/dialog-message-handler.service";
import {AuthenticationData} from "../../core/classes/authentication/authentication-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in-inputs',
  templateUrl: './log-in-inputs.component.html'
})
export class LogInInputsComponent implements OnInit {
  username: string = '';
  password: string = '';
  signUpSubscription: Subscription = new Subscription();
  isLoading = false;

  constructor(private authProvider: AuthenticationProviderService,
              private messageHandler: DialogMessageHandlerService,
              private router: Router) { }
  //Make return to the previous route on success
  ngOnInit(): void {
  }

  onSubmitClick() {
    let user = new AuthenticationData();
    user.userName = this.username;
    user.password = this.password;
    this.isLoading = true;

    this.signUpSubscription = this.authProvider.logIn(user).subscribe(
      () => {},
      error => {
        this.isLoading = false;
        this.messageHandler.onHttpError(error);
      },
      () => {
        this.isLoading = false;
        this.router.navigate(['/']);
      });
  }
}
