import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  constructor(private http:HttpClient) { }

  getAllagencies(){
    return this.http.get('http://localhost:4000/agencies')
  }
}
