import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: any;
  messageSuccess=''
  dataCar={
    car_id:'',
    // agency_id:'',
    // marque:'',
    // model:'',
    // categorie:'',
    // color:'',
    // annual_tax:'',
    availability_status:''
  }

  constructor(private carsService: CarsService) {
    this.getAllcars()
  }

  ngOnInit(): void {
    
  }

  // getdata(agency_id:string,marque:string,model:string,categorie:string,color:string,annual_tax:any,availability_status:any){
    getdata(availability_status:string){
     this.messageSuccess=''
    // this.dataCar.agency_id=agency_id
    // this.dataCar.marque=marque
    // this.dataCar.model=model
    // this.dataCar.categorie=categorie
    // this.dataCar.color=color
    // this.dataCar.annual_tax=annual_tax
    this.dataCar.availability_status=availability_status
    console.log(this.dataCar)

  }

  getAllcars() {
    this.carsService.getAllcars().subscribe(
      (data: any) => {
        this.cars = data;
      },
      (error) => {
        console.error(error);
      }
    ); 
  }

  update(car_id:number,newAvailability:boolean){
      this.carsService.updateAvailability(car_id,newAvailability).subscribe(
        (response)=>{
        console.log(response)
        this.cars=null;
        this.getAllcars()
      },(error)=>{
        console.log(error)
      })
    }

 
}
 





