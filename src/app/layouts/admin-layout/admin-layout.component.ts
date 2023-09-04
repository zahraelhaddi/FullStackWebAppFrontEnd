import {Component, Renderer2, ViewChild,} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})

export class AdminLayoutComponent {
  username:any;
  constructor(private usersService:UsersService, private route:Router,private renderer: Renderer2) {
 
    this.username=this.usersService.getUsername()
   
  }

   ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

  @ViewChild('exampleModal') modal: any; // Reference to the modal element


  openProfileModal() {
    // Use Renderer2 to open the modal
    this.renderer.selectRootElement(this.modal.nativeElement).modal('show');
  }
  
}
