import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nbr-available-cars',
  templateUrl: './nbr-available-cars.component.html',
  styleUrls: ['./nbr-available-cars.component.sass']
})
export class NbrAvailableCarsComponent {
  nbrCars:any;

  constructor(private carsService:CarsService,private usersService:UsersService){
    this.getnbrAvailable()
  }


  ngOnInit(): void {}

  getnbrAvailable() {
  const userId = this.usersService.getUserIdFromToken();
  this.usersService.getAgencyIdFromUserId(userId).subscribe(
    (agency) => {
      // Now, 'agency' will contain the correct numeric agency ID
      this.carsService.getAgencyCarsAvailableNb(agency).subscribe(
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
