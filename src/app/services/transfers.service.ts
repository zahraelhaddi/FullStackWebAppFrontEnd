import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('token',this.token)
  .set('role','Admin')

  params=new HttpParams()
  .set('secret','thisismysecretkey')
  


  headerall=new HttpHeaders()
  .set('token',this.token)


  constructor(private http:HttpClient) { }

  getAlltransfers(){
    return this.http.get('http://localhost:4000/transfers')
  }

  addTransfer(profile:any){
    return this.http.post('http://localhost:4000/transfers',profile,{headers:this.headerAdmin,params:this.params})
  }
}
