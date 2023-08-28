import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCarRoutingModule } from './add-car-routing.module';
import { AddCarComponent } from './add-car.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCarComponent
  ],
  imports: [
    CommonModule,
    AddCarRoutingModule,
    FormsModule,
  ]
})
export class AddCarModule { }
