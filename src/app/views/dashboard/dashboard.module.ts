import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MyTransfersComponent } from '../components/my-transfers/my-transfers.component';
import { MyCarsComponent } from '../components/my-cars/my-cars.component';
import { MyAgenciesComponent } from '../components/my-agencies/my-agencies.component';
import { NbrAvailableCarsComponent } from '../components/nbr-available-cars/nbr-available-cars.component';
import { NbrUnavailableCarsComponent } from '../components/nbr-unavailable-cars/nbr-unavailable-cars.component';
import { NbrCarsComponent } from '../components/nbr-cars/nbr-cars.component';
import { NbrTransfersComponent } from '../components/nbr-transfers/nbr-transfers.component';
import { NbrAgenciesComponent } from '../components/nbr-agencies/nbr-agencies.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MyTransfersComponent,
    MyCarsComponent,
    MyAgenciesComponent,
    MyAgenciesComponent,
    NbrAvailableCarsComponent,
    NbrUnavailableCarsComponent,
    NbrCarsComponent,
    NbrTransfersComponent,
    NbrAgenciesComponent,
    NbrCarsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
  ]
})
export class DashboardModule { }
