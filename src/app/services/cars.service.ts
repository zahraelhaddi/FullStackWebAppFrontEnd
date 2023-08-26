import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('token',this.token)
  .set('role','Admin')

  params=new HttpParams()
  .set('secret','thisismysecretkey')
  


  headerall=new HttpHeaders()
  .set('token',this.token)




  constructor(private http:HttpClient,private route:Router) { }

  getAllcars(){
    return this.http.get('http://localhost:4000/cars')
    .pipe(
      catchError(error => {
        console.error('Error fetching cars:', error);
        return throwError(error);
      })
    );
  }

  addCar(profile:any){

    return this.http.post('http://localhost:4000/cars',profile,{headers:this.headerAdmin,params:this.params})

  }


  updateAvailability(carId: number, newAvailability: boolean) {
     return this.http.patch('http://localhost:4000/cars/availability/'+carId,{
      availability: newAvailability}
    );
  }
  
}
