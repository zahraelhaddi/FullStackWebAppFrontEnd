import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { AddCarComponentComponent } from '../components/add-car-component/add-car-component.component';


@NgModule({
  declarations: [
    CarsComponent,
    AddCarComponentComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
  ]
})
export class CarsModule { }
