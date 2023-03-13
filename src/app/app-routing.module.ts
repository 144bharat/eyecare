import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './credential/login/login.component';
import { SignupComponent } from './credential/signup/signup.component';
import { HomeComponent } from './home/home.component';
// import {BookingComponent} from './booking/booking.component';
import { NoPageComponent } from './no-page/no-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path:'booking',component:BookingComponent},
  { path:'credential',children:[{path:'signup',component:SignupComponent},{path:'login',component:LoginComponent}]},
  {path:'**',component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }