import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.sass']
})
export class AdduserComponent {

  messageErr:any;
  messageSuccess: any;
  message:any;

  constructor(private usersService:UsersService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    //console.log(data)
    this.usersService.addUser(data).subscribe(response=>{
      //console.log(response); 
      this.message = response;
      if(this.message==='Agent existe déjà!'){
        this.messageErr=response
      }else if(this.message==='nouveau Agent ajoutée avec succès!'){
        this.messageSuccess=response
      }
            
      this.route.navigate(['/users/add'])

    },(err)=>{ 
      console.log(err.error)
      // console.log(err.status)
    })
  }

}
