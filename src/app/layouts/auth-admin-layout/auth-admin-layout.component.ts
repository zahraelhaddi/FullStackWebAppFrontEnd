import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.sass']
})
export class AuthAdminLayoutComponent {
  users:any;
  datareceived:any;
  messageErr:any;

  constructor(private usersService:UsersService, private route:Router) {
    if(this.usersService.LoggedIn()==true){
      this.route.navigate(['/'])
  }
   }
  ngOnInit(): void {
    this.usersService.getAllusers()
  }
   

  //  login(f:any){
  //   let data=f.value
  //   this.usersService.loginAdmin(data).subscribe(
  //     (response)=>{
  //       console.log(data)
  //     this.datareceived=response
  //     this.usersService.saveDataProfile(this.datareceived.token)
  //     this.route.navigate(['/cars/'])
  //     if(this.datareceived==='Email ou password invalide'){
  //       this.messageErr=this.datareceived
  //     }
  //     // console.log(this.datareceived)
  //     // console.log(response)
  //   },
  //     (error: any)=>{
  //       console.log(error)  
  //     }
      
  //   ) 
  //  }

  login(f: any) {
    let data = f.value;
    this.usersService.loginAdmin(data).subscribe(
      (response: any) => {
        this.datareceived = response;
        console.log(response)
        if (this.datareceived.token) {
          this.usersService.saveDataProfile(this.datareceived.token);
          this.route.navigate(['/dashboard']);
        } else {
          this.messageErr = 'Email or password invalid';
        }
      },
      (error: any) => {
        this.messageErr = 'An error occurred while logging in.';
        console.log(error);
      }
    );
  }
  



   


}

