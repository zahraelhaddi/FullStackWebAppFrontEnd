import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit{
  users:any;
  constructor(private usersService:UsersService) {
 
    
   }
  ngOnInit(): void {
    this.getAllusers()
  }
   getAllusers(){
    this.usersService.getAllusers().subscribe((data)=>{
      this.users=data
    },(error)=>{
      console.error(error)
    })
   }

   login(f:any){
    let data=f.value
    console.log(data)

    this.usersService.loginAdmin(data).subscribe(response=>{console.log(response),(error: any)=>
      console.log(error)
    
   })
  }}
