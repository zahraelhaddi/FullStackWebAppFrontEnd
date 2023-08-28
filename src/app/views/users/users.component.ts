import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  users:any;
  constructor(private usersService:UsersService) {
 
    this.getAllusers()
   }
  ngOnInit(): void {
  }
   getAllusers(){
    this.usersService.getAllusers().subscribe((data)=>{
      this.users=data
    },(error)=>{
      console.error(error)
    })
   }
}
