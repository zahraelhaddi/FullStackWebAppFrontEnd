import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('token',this.token)
  .set('role','Admin')

  params=new HttpParams()
  .set('secret',environment.secret)
  


  headerall=new HttpHeaders()
  .set('token',this.token)



  constructor(private http:HttpClient) { }

  getAllagencies(){
    return this.http.get(`${environment.apiUrl}`+'agencies',{headers:this.headerall})
  }

  addAgency(profile:any){
    return this.http.post(`${environment.apiUrl}`+'agencies',profile,{headers:this.headerall})

  }
  deleteAgency(id:number){
    return this.http.delete(`${environment.apiUrl}`+"agencies/"+id,{headers:this.headerall})
  }

  update(agency_id:number,newprofile:any){
    return this.http.patch(`${environment.apiUrl}`+"agencies/"+agency_id,newprofile,{headers:this.headerall})
  }

  getAgenciesNbr(){
    return this.http.get(`${environment.apiUrl}`+"agenciesnbre")
  }
}
