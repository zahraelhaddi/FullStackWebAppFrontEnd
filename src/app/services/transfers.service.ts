import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('token',this.token)
  .set('role','Admin')
  

  headerall=new HttpHeaders()
  .set('token',this.token)


  constructor(private http:HttpClient) { }

  getAlltransfers(){
    return this.http.get(`${environment.apiUrl}`+'transfers',{headers:this.headerall})
  }

  addTransfer(profile:any){
    return this.http.post(`${environment.apiUrl}`+'transfers',profile,{headers:this.headerall})
  }

  getUserTransfers(user_id:number){
    return  this.http.get(`${environment.apiUrl}`+'transfers/user/'+user_id,{headers:this.headerall})
  }
}
