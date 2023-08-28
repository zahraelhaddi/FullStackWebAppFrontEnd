import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddagencyRoutingModule } from './addagency-routing.module';
import { AddagencyComponent } from './addagency.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddagencyComponent
  ],
  imports: [
    CommonModule,
    AddagencyRoutingModule,
    FormsModule,
  ]
})
export class AddagencyModule { }
