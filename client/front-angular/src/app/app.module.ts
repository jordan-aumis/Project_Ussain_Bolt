import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UssainBoltAppComponent } from './ussain-bolt-app/ussain-bolt-app.component';
import { UssainBoltAppSideNavComponent } from './ussain-bolt-app-side-nav/ussain-bolt-app-side-nav.component';
import { UssainBoltAppInfoPageComponent } from './ussain-bolt-app-info-page/ussain-bolt-app-info-page.component';
import { UssainBoltAppUserPageComponent } from './ussain-bolt-app-user-page/ussain-bolt-app-user-page.component';
import { UssainBoltAppGymCardComponent } from './ussain-bolt-app-gym-card/ussain-bolt-app-gym-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    UssainBoltAppComponent,
    UssainBoltAppSideNavComponent,
    UssainBoltAppInfoPageComponent,
    UssainBoltAppUserPageComponent,
    UssainBoltAppGymCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

