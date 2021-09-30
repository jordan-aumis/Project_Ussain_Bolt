import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UssainBoltAppComponent } from './ussain-bolt-app/ussain-bolt-app.component';
import { UssainBoltAppSideNavComponent } from './ussain-bolt-app-side-nav/ussain-bolt-app-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    UssainBoltAppComponent,
    UssainBoltAppSideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

