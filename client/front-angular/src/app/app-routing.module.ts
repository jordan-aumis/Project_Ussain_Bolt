import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UssainBoltAppComponent } from './ussain-bolt-app/ussain-bolt-app.component'

const routes: Routes = [
  { path: 'app', component: UssainBoltAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
