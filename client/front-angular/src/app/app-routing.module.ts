import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UssainBoltAppComponent } from './ussain-bolt-app/ussain-bolt-app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent, pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent, pathMatch: 'full' },
  { path: 'app', component: UssainBoltAppComponent, pathMatch: 'full' },
  { path: 'gymnases/:id', component: UssainBoltAppComponent, pathMatch: 'full' },
  { path: '', component: LoginPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
