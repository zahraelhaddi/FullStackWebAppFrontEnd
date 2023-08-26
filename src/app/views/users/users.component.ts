import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  constructor(private usersService:UsersService) {
 
    this.usersService.getAllusers().subscribe(data=>console.log(data))
   }
  ngOnInit(): void {
  }
}
