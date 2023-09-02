import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nbr-cars',
  templateUrl: './nbr-cars.component.html',
  styleUrls: ['./nbr-cars.component.sass']
})
export class NbrCarsComponent {
  total:any;

  constructor(private carsService:CarsService,private usersService:UsersService){
    this.totalcars()
  }


  ngOnInit(): void {}

  totalcars() {
  const userId = this.usersService.getUserIdFromToken();
  this.usersService.getAgencyIdFromUserId(userId).subscribe(
    (agency) => {
      // Now, 'agency' will contain the correct numeric agency ID
      this.carsService.gettotalCars(agency).subscribe(
        (response) => {
          this.total= response;
        },
        (error) => {
          // Handle HTTP error
          console.error('Error fetching total cars:', error);
        }
      );
    },
    (error) => {
      // Handle HTTP error in getting agency ID
      console.error('Error getting total:', error);
    }
  );
}
}
