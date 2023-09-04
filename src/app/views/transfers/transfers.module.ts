import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


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
    NgxPaginationModule,
  ]
})
export class TransfersModule { }
