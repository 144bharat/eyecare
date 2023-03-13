import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { BookingComponent } from './booking/booking.component';
import { NoPageComponent } from './no-page/no-page.component';
import { CredentialModule } from './credential/credential.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    // BookingComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CredentialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
