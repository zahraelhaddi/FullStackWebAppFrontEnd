import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';

const routes: Routes = [
  {path:'',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'cars',loadChildren:()=>import('./views/cars/cars.module').then(m=>m.CarsModule)},
    {path:'agencies',loadChildren:()=>import('./views/agencies/agencies.module').then(m=>m.AgenciesModule)},
    {path:'transfers',loadChildren:()=>import('./views/transfers/transfers.module').then(m=>m.TransfersModule)},
    {path:'users',loadChildren:()=>import('./views/users/users.module').then(m=>m.UsersModule)},
    {path:'cars/add',loadChildren:()=>import('./views/components/add-car/add-car.module').then(m=>m.AddCarModule)},
    {path:'cardetails/:id',loadChildren:()=>import('./views/car-details/car-details.module').then(m=>m.CarDetailsModule)},

    
],},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
