import {Component,} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})

export class AdminLayoutComponent {
  username:any;
  constructor(private usersService:UsersService, private route:Router) {
 
    this.username=this.usersService.getUsername()
   
  }

   ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }
  
}
