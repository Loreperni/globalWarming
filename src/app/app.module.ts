import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArcticComponent } from './arctic/arctic.component';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { Co2Component } from './co2/co2.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MethaneComponent } from './methane/methane.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { No2Component } from './no2/no2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    ArcticComponent,
    BackBtnComponent,
    Co2Component,
    FooterComponent,
    HomepageComponent,
    MethaneComponent,
    NavBarComponent,
    No2Component,
    PageNotFoundComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
