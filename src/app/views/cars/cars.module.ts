import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarsComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class CarsModule { }
