import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BookingComponent} from './booking/booking.component';
import { NoPageComponent } from './no-page/no-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'booking',component:BookingComponent},
  {path:'**',component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }