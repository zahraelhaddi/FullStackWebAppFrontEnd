import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nbr-unavailable-cars',
  templateUrl: './nbr-unavailable-cars.component.html',
  styleUrls: ['./nbr-unavailable-cars.component.sass']
})
export class NbrUnavailableCarsComponent {

  nbrCars:any;
  constructor(private carsService:CarsService,private usersService:UsersService){
    this.getnbrUnavailable()
  }


  ngOnInit(): void {}

  getnbrUnavailable() {
  const userId = this.usersService.getUserIdFromToken();
  this.usersService.getAgencyIdFromUserId(userId).subscribe(
    (agency) => {
      // Now, 'agency' will contain the correct numeric agency ID
      this.carsService.getAgencyCarsUnavailableNb(agency).subscribe(
        (response) => {
          this.nbrCars= response;
        },
        (error) => {
          // Handle HTTP error
          console.error('Error fetching nbr available cars:', error);
        }
      );
    },
    (error) => {
      // Handle HTTP error in getting agency ID
      console.error('Error getting agency ID:', error);
    }
  );
}
}


