import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationProviderService} from "../../core/services/authentication/authentication-provider.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GeneralDataValidatorService} from "../../core/services/general-data-validator.service";
import {AuthenticationData} from "../../core/classes/authentication/authentication-data";
import {Subscription} from "rxjs";
import {DialogMessageHandlerService} from "../../core/services/dialog-message-handler.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-inputs',
  templateUrl: './sign-up-inputs.component.html'
})
export class SignUpInputsComponent implements OnInit, OnDestroy {
  signUpForm!: FormGroup;
  signUpSubscription: Subscription = new Subscription();
  isLoading = false;

  constructor(private authenticationProvider: AuthenticationProviderService,
              private generalValidator: GeneralDataValidatorService,
              private messageHandler: DialogMessageHandlerService,
              private router: Router) { }

  ngOnInit(): void {
    this.setUpFormGroup();
  }

  onSubmitClick() {
    let user: AuthenticationData = new AuthenticationData();
    user.userName = this.signUpForm.get('username')?.value;
    user.email = this.signUpForm.get('email')?.value;
    user.password = this.signUpForm.get('password')?.value;
    this.isLoading = true;

    this.signUpSubscription = this.authenticationProvider.signUp(user).subscribe(
      () => {},
      error => {
        this.isLoading = false;
        this.messageHandler.onHttpError(error);
      },
      () => {
        this.isLoading = false;
        this.router.navigate(['/log-in']);
      });
  }

  setUpFormGroup() {
    let passwordControl = new FormControl(null, [
      Validators.pattern(new RegExp('^(?=(?:\\D*\\d)+)(?=(?:[^a-z]*[a-z])+)(?=[^A-Z]*[A-Z])(?=(?:\\w*\\W)+)(?=(.){6,})'))
    ]);
    let repeatPasswordControl = new FormControl(null, [
      this.generalValidator.getSameValueValidator(passwordControl, "PasswordsNotTheSame"),
      Validators.required]);
    passwordControl.valueChanges.subscribe(() => {
      repeatPasswordControl.setValue(repeatPasswordControl.value);
    });

    this.signUpForm = new FormGroup({
      "username" : new FormControl(null, [
        Validators.pattern(new RegExp('^[^.* +.*|.*\'+.*|.*\\"+.*]{5,}$'))
      ]),
      "email" : new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      "password" : passwordControl,
      "repeat-password" : repeatPasswordControl
    })
  }

  ngOnDestroy(): void {
    this.signUpSubscription.unsubscribe();
  }
}
