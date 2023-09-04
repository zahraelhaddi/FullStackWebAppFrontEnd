import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { TransfersService } from 'src/app/services/transfers.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nbr-unavailable-cars',
  templateUrl: './nbr-unavailable-cars.component.html',
  styleUrls: ['./nbr-unavailable-cars.component.sass']
})
export class NbrUnavailableCarsComponent {

  nbrCars:any;
  transfers: any;

  constructor(private carsService:CarsService,private transfersService:TransfersService,private usersService:UsersService){
    this.getnbrTransfers()
  }


  ngOnInit(): void {}

//   getnbrUnavailable() {
//   const userId = this.usersService.getUserIdFromToken();
//   this.usersService.getAgencyIdFromUserId(userId).subscribe(
//     (agency) => {
//       // Now, 'agency' will contain the correct numeric agency ID
//       this.carsService.getAgencyCarsUnavailableNb(agency).subscribe(
//         (response) => {
//           this.nbrCars= response;
//         },
//         (error) => {
//           // Handle HTTP error
//           console.error('Error fetching nbr available cars:', error);
//         }
//       );
//     },
//     (error) => {
//       // Handle HTTP error in getting agency ID
//       console.error('Error getting agency ID:', error);
//     }
//   );
// }

// getnbrTransfers(){
//   const userId = this.usersService.getUserIdFromToken(); 
//     //console.log(userId)

//     // Fetch transfers associated with the logged-in user's ID
//     this.transfersService.getUserTransfers(userId).subscribe(
//       (response) => {
//        //console.log(response)
//         this.transfers = response.length;
//       },
//       (error) => {
//         console.error('Error fetching transfers:', error);
//       }
//     );
// }

getnbrTransfers() {
  const userId = this.usersService.getUserIdFromToken();

  this.transfersService.getUserTransfers(userId).subscribe(
    (response) => {
      if (Array.isArray(response)) {
        this.transfers = response.length;
      } else {
        this.transfers = 0;
      }
    },
    (error) => {
      console.error('Error fetching transfers:', error);
    }
  );
}
}


