import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WeatherComponent } from './header/weather/weather.component';
import { NavListToggleDirective } from './directives/nav-list-toggle.directive';
import { SvgImageComponent } from './header/svg-image/svg-image.component';
import { RightColumnComponent } from './header/right-column/right-column.component';
import { UserBarComponent } from './header/right-column/user-bar/user-bar.component';
import { UnknownUserBarComponent } from './header/right-column/user-bar/unknown-user-bar/unknown-user-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WeatherComponent,
    NavListToggleDirective,
    SvgImageComponent,
    RightColumnComponent,
    UserBarComponent,
    UnknownUserBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
