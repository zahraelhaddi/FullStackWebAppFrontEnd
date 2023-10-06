import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.sass']
})
export class AddCarComponent {
  messageErr=""
  messageSuccess: any;
  user_agency:any;
  
  constructor(private cs:CarsService,private usersService:UsersService,private route:Router) {
   }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    //console.log(data)
    this.cs.addCar(data).subscribe(response=>{
      //console.log(response); 
            this.messageSuccess = response;
      this.route.navigate(['/cars/add'])

    },(err)=>{ 
      this.messageErr=err.error
      console.log(err.error)
      // console.log(err.status)
    })
  }
  
  
  
  
}
