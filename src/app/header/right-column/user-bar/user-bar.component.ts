import { Component, OnInit } from '@angular/core';
import {User} from "../../../core/classes/authentication/user";
import {Subscription} from "rxjs";
import {AuthenticationProviderService} from "../../../core/services/authentication/authentication-provider.service";

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.css']
})
export class UserBarComponent implements OnInit {
  user: User|null = null;
  userSubscription: Subscription = new Subscription();

  constructor(public authProvider: AuthenticationProviderService) { }
  ngOnInit(): void {
    this.userSubscription = this.authProvider.user.subscribe(
      userData => this.user = userData
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
