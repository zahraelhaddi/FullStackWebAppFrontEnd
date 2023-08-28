import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.sass']
})
export class CarDetailsComponent {
  id=0;
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private carsService:CarsService) {
    this.route.params.subscribe(params=>
      this.id=params['id'])
    this.carsService.getOneCar(this.id).subscribe(
      response=>
      
      this.dataObject=response,
       
      (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="Cette voiture n'existe pas"})
   }

  ngOnInit(): void {
  }
}
