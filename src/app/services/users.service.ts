import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  

  profileAdmin={
    username:'',
    role:''
  }
  
  
  token:any = localStorage.getItem('token');

  headerall=new HttpHeaders()
  .set('token',this.token)
  

  helper=new JwtHelperService()

  constructor(private http:HttpClient) { }

  getAllusers(){
    return this.http.get(`${environment.apiUrl}`+'users', { headers:this.headerall });
  }

  addUser(profile:any){

    return this.http.post(`${environment.apiUrl}`+'users/add',profile,{headers:this.headerall})

  }

  getUserIdFromToken(): number {
    const token: any = localStorage.getItem('token');
    const decodedToken = this.helper.decodeToken(token);
    return decodedToken.user_id; // Adjust property name as needed
  }

  getAgencyIdFromUserId(id: number) {
    return this.http.get(`${environment.apiUrl}`+`c/${id}`, { headers: this.headerall });
  }

  getOneUser(id:number){
    return  this.http.get(`${environment.apiUrl}`+"users/"+id,{headers:this.headerall})
  }
  
  updateUser(id:number,profile:any){
    return   this.http.patch(`${environment.apiUrl}`+'users/'+id,profile,{headers:this.headerall});
  }



  loginAdmin(data:any){
    return this.http.post(`${environment.apiUrl}`+'admin/login',data)
  }

  saveDataProfile(token:any){
    let decodeToken=this.helper.decodeToken(token)
    localStorage.setItem('token',token)
   }

   getUsername(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    return decodeToken.username
   }

  LoggedIn(){
    let token:any =localStorage.getItem('token')
    if(!token){
      return false
    }
    
    if(!localStorage.getItem('token')){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }

    hasSpecificAdminToken(): boolean {
      const token = localStorage.getItem('token'); // Replace with your method to retrieve the JWT token from storage
  
      if (token) {
        try {
          const decodedToken = this.helper.decodeToken(token);
          return decodedToken.role === 'Admin'; // Check if the role is 'Admin'
        } catch (error) {
          console.error('Error decoding JWT token:', error);
        }
      }
  
      return false; // Return false if no token or if the role is not 'Admin'
    }


}

  




