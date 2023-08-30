import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransfersComponent } from './transfers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransfersComponent
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    FormsModule,
  ]
})
export class TransfersModule { }
