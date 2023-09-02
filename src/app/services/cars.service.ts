import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('token',this.token)
  .set('role','Admin')

  

  headerall=new HttpHeaders()
  .set('token',this.token)




  constructor(private http:HttpClient,private route:Router) { }

  getAllcars(){
    return this.http.get(`${environment.apiUrl}`+'cars',{headers:this.headerall})
    .pipe(
      catchError(error => {
        console.error('Error fetching cars:', error);
        return throwError(error);
      })
    );
  }

  addCar(profile:any){

    return this.http.post(`${environment.apiUrl}`+'cars',profile,{headers:this.headerall})

  }

  getAgencyCarsAvailableNb(id:any){
    return   this.http.get(`${environment.apiUrl}`+"cars/agency/avnbr/"+id,{headers : this.headerall})
  }
  getAgencyCarsUnavailableNb(id:any){
    return   this.http.get(`${environment.apiUrl}`+"cars/agency/unavnbr/"+id,{headers : this.headerall})
  }


  updateAvailability(carId: number, newAvailability: boolean) {
     return this.http.patch(`${environment.apiUrl}`+'cars/availability/'+carId,{
      availability: newAvailability},{headers:this.headerall}
    );
  }

  deleteCar(car_id:number){
    return this.http.delete(`${environment.apiUrl}`+"cars/"+car_id,{headers:this.headerall})
  }

  update(car_id:string,newprofile:any){
    return this.http.patch(`${environment.apiUrl}`+"cars/"+car_id,newprofile,{headers:this.headerall})
  }

  getOneCar(id:number){
    return this.http.get(`${environment.apiUrl}`+"cars/"+id,{headers:this.headerall})

  }
  getAgencyCars(id:any){
    return this.http.get(`${environment.apiUrl}`+"cars/agency/"+id,{headers:this.headerall})
  }

  gettotalCars(id:any){
    return this.http.get(`${environment.apiUrl}`+"cars/agency/nbr/"+id,{headers:this.headerall})
  }  
}
