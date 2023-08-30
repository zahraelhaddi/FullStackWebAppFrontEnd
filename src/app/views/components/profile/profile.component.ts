import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  data: any;
  messageErr :any;
  users: any;
  messageSuccess:any;
  dataUser={
    user_id:0,
    fullname:'',
    email:''  
  }

  constructor(private usersService: UsersService) {
    this.usersService.getAllusers()
  }

  ngOnInit(): void {
    // Retrieve user's ID from the token
  const userId = this.usersService.getUserIdFromToken();

  // Fetch the user's profile using the retrieved ID
  this.usersService.getOneUser(userId).subscribe(
    (response) => {
      this.data = response;
      //console.log(this.data)
    },
    (err) => {
      console.log(err);
      this.messageErr = "Un Erreur s'est parvenue.";
    })}
  

  
  

  getdata(user_id:number,fullname:string,email:string){
  
    this.messageSuccess=''
    this.dataUser.user_id=user_id
   this.dataUser.fullname=fullname
   this.dataUser.email=email
   console.log(this.dataUser)

 }
 
  // updateUser(f:any){
  //   let data=f.value
  //   console.log(data)
  // this.usersService.updateUser(this.dataUser.user_id,data).subscribe(response=>
  //   {
  //   console.log(response)
  //     let indexId=this.users.findIndex((obj:any)=>obj.user_id==this.dataUser.user_id)
  //     console.log(indexId)
  //     //console.log(typeof data.agency_id)

  //     this.users[indexId].fullname=data.fullname
  //     this.users[indexId].email=data.email
   
  //     //console.log(this.users[indexId])

  //     this.messageSuccess=response
      

  //   },(err:HttpErrorResponse)=>{
  //     console.log(err)
  //     this.messageErr=err
    
  //   })
  // }

  updateUser(f: any) {
    let data = f.value;
    console.log(data);
  
    this.usersService.updateUser(this.dataUser.user_id, data).subscribe(
      (response) => {
        console.log(response);
        this.usersService.getAllusers().subscribe((usersData) => {
          this.users = usersData; // Update the local users array
  
          let indexId = this.users.findIndex(
            (obj: any) => obj.user_id == this.dataUser.user_id
          );
  
          if (indexId !== -1) {
            this.users[indexId].fullname = data.fullname;
            this.users[indexId].email = data.email;
          }
  
          this.messageSuccess = response;
        });
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.messageErr = err;
      }
    );
  }
  
}
