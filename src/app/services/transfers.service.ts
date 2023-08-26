import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor(private http:HttpClient) { }

  getAlltransfers(){
    return this.http.get('http://localhost:4000/transfers')
  }
}
