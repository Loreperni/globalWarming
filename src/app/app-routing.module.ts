import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Co2Component } from './co2/co2.component';
import { ArcticComponent } from './arctic/arctic.component';
import { MethaneComponent } from './methane/methane.component';
import { No2Component } from './no2/no2.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'arctic', component: ArcticComponent},
  {path: 'co2', component: Co2Component},
  {path: 'methane', component: MethaneComponent},
  {path: 'no2', component: No2Component},
  {path: 'temperature', component: TemperatureComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
