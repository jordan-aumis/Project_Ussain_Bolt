import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UssainBoltAppComponent } from './ussain-bolt-app/ussain-bolt-app.component';
import { UssainBoltAppSideNavComponent } from './ussain-bolt-app-side-nav/ussain-bolt-app-side-nav.component';
import { UssainBoltAppInfoPageComponent } from './ussain-bolt-app-info-page/ussain-bolt-app-info-page.component';
import { UssainBoltAppUserPageComponent } from './ussain-bolt-app-user-page/ussain-bolt-app-user-page.component';
import { UssainBoltAppGymCardComponent } from './ussain-bolt-app-gym-card/ussain-bolt-app-gym-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BackOfficeComponent } from './back-office/back-office.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UssainBoltAppComponent,
    UssainBoltAppSideNavComponent,
    UssainBoltAppInfoPageComponent,
    UssainBoltAppUserPageComponent,
    UssainBoltAppGymCardComponent,
    UserProfileComponent,
    BackOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

