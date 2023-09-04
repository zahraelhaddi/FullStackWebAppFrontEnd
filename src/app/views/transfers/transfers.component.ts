import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { AgenciesService } from 'src/app/services/agencies.service';
import { CarsService } from 'src/app/services/cars.service';
import { TransfersService } from 'src/app/services/transfers.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass']
})
export class TransfersComponent {
  transfers:any;
  messageSuccess: any;
  messageErr: any;
  filteredtransfers: any;
  agencies: any;
  cars:any;
  availableCars: any;
  sourceAgencies: any;
  selectedCarId: any;
  destinationAgencies: any;



  constructor(private transfersService:TransfersService,private agenciesService: AgenciesService,private carsService:CarsService,private usersService:UsersService,private route:Router) {
 
    this.getAlltransfers()

    this.getAllAgencies();
    this.getAvailableCars()
   }
  ngOnInit(): void {
  }

getAllAgencies(){
  this.agenciesService.getAllagencies().subscribe(
    (response) => {
     //console.log(response)
      this.agencies = response;
    },
    (error) => {
      console.error('Error fetching transfers:', error);
    }
  );
}

  getAlltransfers(){
    this.transfersService.getAlltransfers().subscribe(
      (data: any) => {
        this.transfers = data;
        this.filteredtransfers=this.transfers;
      },
      (error) => {
        console.error(error);
      }
    ); 
  }

  add(f:any){
    let data=f.value
    //console.log(data)
    //console.log(this.getCurrentUserId())
    let dataa={
            "car_id": data.car_id,
             "source":data.source,
             "destination":data.destination ,
             "user_id":this.getCurrentUserId()
    }
    //console.log(dataa)
    this.transfersService.addTransfer(dataa).subscribe(response=>{
      //console.log(response); 
            this.transfers=null;
             this.getAlltransfers();
             this.messageSuccess=response
    },(err)=>{ 
      this.messageErr=err.error
      console.log(err.error)
      // console.log(err.status)
    })
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

//   applyFilter() {
//     this.filteredtransfers= this.transfers.filter((transfer: { transfer_date:Date}) =>{
//     const searchTerm = this.searchTerm.toLowerCase();
// return (
//   transfer.transfer_date.toString().includes(searchTerm)
// );
// });
// this.config.currentPage = 1;   
// }
applyFilter() {
  const searchTerm = this.searchTerm.toLowerCase();
  this.filteredtransfers = this.transfers.filter((transfer: {  
  car: { car_id: { toString: () => string | string[]; }; };  }) => {
    return (
      transfer.car.car_id.toString().includes(searchTerm)
    );
  });
}

getAvailableCars() {
  this.carsService.getAllcars().subscribe(
    (data: any) => {
      this.cars = data;
      //console.log(this.cars)
      this.availableCars = this.cars.filter((car: any) => car.availability_status === true);
      //console.log(this.availableCars)
    },
    (error) => {
      console.error(error);
    }
  ); 
}

getCurrentUserId(){
  return this.usersService.getUserIdFromToken()
}

onCarChange() {
  // Filter and populate the sourceAgencies and destinationAgencies arrays based on the selected car_id
  console.log(this.selectedCarId)
  console.log(this.availableCars)

  let agid=this.getCarById().agency_id
  
  this.sourceAgencies = this.agencies.filter((agency:any)=>agency.agency_id==agid);
  this.destinationAgencies = this.agencies.filter((agency:any)=>agency.agency_id!==agid);
  console.log(this.destinationAgencies)

}


getCarById(){
  for (let index = 0; index < this.availableCars.length; index++) {
    const element = this.availableCars[index];
    if(element.car_id==this.selectedCarId){
      return element
    }
    
  }
}

}
