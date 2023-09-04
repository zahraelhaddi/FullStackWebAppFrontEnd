import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AgenciesComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    FormsModule,
    NgxPaginationModule,
    
  ]
})
export class AgenciesModule { }
