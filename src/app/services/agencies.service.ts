import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('token',this.token)
  .set('role','Admin')

  params=new HttpParams()
  .set('secret','thisismysecretkey')
  


  headerall=new HttpHeaders()
  .set('token',this.token)



  constructor(private http:HttpClient) { }

  getAllagencies(){
    return this.http.get('http://localhost:4000/agencies',{headers:this.headerall})
  }

  addAgency(profile:any){
    return this.http.post('http://localhost:4000/agencies',profile,{headers:this.headerall})

  }
  deleteAgency(id:number){
    return this.http.delete("http://localhost:4000/agencies/"+id,{headers:this.headerall})
  }

  update(agency_id:number,newprofile:any){
    return this.http.patch("http://localhost:4000/agencies/"+agency_id,newprofile,{headers:this.headerall})
  }
}
