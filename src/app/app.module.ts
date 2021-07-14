import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from "./core/services/authentication/auth-interceptor.service";
import {AuthModule} from "./auth/auth.module";
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {MainModule} from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HeaderModule,
    FooterModule,
    MainModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
