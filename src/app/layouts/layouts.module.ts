import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';

//AdminLayoutComponent here was added automatically after i created the "admin-layout" component


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthAdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutsModule { }