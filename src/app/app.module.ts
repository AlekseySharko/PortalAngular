import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WeatherComponent } from './header/weather/weather.component';
import { NavListToggleDirective } from './directives/nav-list-toggle.directive';
import { SvgImageComponent } from './header/svg-image/svg-image.component';
import { LinkContainerComponent } from './header/link-container/link-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WeatherComponent,
    NavListToggleDirective,
    SvgImageComponent,
    LinkContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
