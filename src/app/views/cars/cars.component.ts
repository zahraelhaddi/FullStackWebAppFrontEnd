import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
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
    agency_id:0,
    marque:'',
    model:'',
    categorie:'',
    color:'',
    carburant_id:0,
    date_immatri:'',
    puissance:0,
    car_id:'',
    ville:'',
    matricule:'',
    annual_tax:0
  }
  filteredCars: any;
  
  



  constructor(private carsService: CarsService,private route:Router) {
    this.getAllcars()
  }

  ngOnInit(): void {
  }
  
  

  getAllcars() {
    this.carsService.getAllcars().subscribe(
      (data: any) => {
        this.cars = data;
        this.filteredCars=this.cars;
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

    delete(id:any,i:number){

      this.carsService.deleteCar(id).subscribe(response=>{
        console.log(response)
         this.cars.splice(i,1)
  
      })
  
    }


    getdata(agency_id:number,marque:string,model:string,categorie:string,color:string,carburant_id:number,
      date_immatri:string,
      puissance:number,car_id:string,ville:string,matricule:string,annual_tax:number){
    
      this.messageSuccess=''
     this.dataCar.agency_id=agency_id
     this.dataCar.marque=marque
     this.dataCar.model=model
     this.dataCar.categorie=categorie
     this.dataCar.color=color
     this.dataCar.carburant_id=carburant_id
     this.dataCar.date_immatri=date_immatri
     this.dataCar.puissance=puissance
     this.dataCar.car_id=car_id   
     this.dataCar.ville=ville  
     this.dataCar.matricule=matricule
     this.dataCar.annual_tax=annual_tax
     //console.log(this.dataCar)
 
   }
   
    updateCar(f:any){
      let data=f.value
      let dataa={
        "agency_id":Number(data.agency_id),
        "model":data.model ,
        "matricule":data.matricule ,
        "ville":data.ville ,
        "marque":data.marque,
        "color":data.color ,
        "categorie":data.categorie,
        "carburant_id":Number(data.carburant_id) ,
        "date_immatri":data.date_immatri ,
        "puissance":data.puissance
      }
      console.log(dataa)
    this.carsService.update(this.dataCar.car_id,dataa).subscribe(response=>
      {
      console.log(response)
        let indexId=this.cars.findIndex((obj:any)=>obj.car_id==this.dataCar.car_id)
        //console.log(indexId)
        //console.log(typeof dataa.agency_id)

        this.cars[indexId].agency_id=dataa.agency_id
        this.cars[indexId].model=dataa.model
        this.cars[indexId].matricule=dataa.matricule
        this.cars[indexId].annual_tax=this.dataCar.annual_tax
        this.cars[indexId].ville=dataa.ville
        this.cars[indexId].marque=dataa.marque
        this.cars[indexId].color=dataa.color
        this.cars[indexId].categorie=dataa.categorie
        this.cars[indexId].carburant_id=dataa.carburant_id
        this.cars[indexId].date_immatri=dataa.date_immatri
        this.cars[indexId].puissance=dataa.puissance
        console.log(this.cars[indexId])

        this.messageSuccess=`this student ${this.cars[indexId].model} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err)
      
      })
    }


   
      details(id:any,i:number){
        this.route.navigate(['/cardetails/'+id])
      }
    
      config: PaginationInstance = {
        itemsPerPage: 8,
        currentPage: 1
      };
      
      // Search filter
      searchTerm: string = '';
      
      // 
      pageChanged(event: any) {
        this.config.currentPage = event;
      }

      applyFilter() {
        this.filteredCars= this.cars.filter((car: { agency_id:number;marque: string; model: string; categorie: string; color: string; }) =>{
        const searchTerm = this.searchTerm.toLowerCase();
    return (
      car.agency_id.toString().includes(searchTerm) ||
      car.marque.toLowerCase().includes(searchTerm) ||
      car.model.toLowerCase().includes(searchTerm) ||
      car.categorie.toLowerCase().includes(searchTerm) ||
      car.color.toLowerCase().includes(searchTerm)
      // Add more fields as needed
    );
    
    });
    this.config.currentPage = 1;
        
        
      
}
}