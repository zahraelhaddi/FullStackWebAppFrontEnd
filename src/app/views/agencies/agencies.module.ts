import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgenciesComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    FormsModule,
  ]
})
export class AgenciesModule { }
