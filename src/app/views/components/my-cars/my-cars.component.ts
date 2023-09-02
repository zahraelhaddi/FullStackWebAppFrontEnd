import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.sass']
})
export class MyCarsComponent {
  cars: any[] = []; // Initialize cars as an empty array to avoid errors

  constructor(private carsService: CarsService, private usersService: UsersService) {
    this.getCars(); // Use camelCase for method names
  }

  ngOnInit(): void {}

  getCars() {
    const userId = this.usersService.getUserIdFromToken();
    this.usersService.getAgencyIdFromUserId(userId).subscribe(
      (agency) => {
        // Now, 'agency' will contain the correct numeric agency ID
        this.carsService.getAgencyCars(agency).subscribe(
          (response) => {
            // Assuming response is an object, convert it to an array
            this.cars = Object.values(response); // Or use a different conversion method
            console.log('Cars:', this.cars); // Add this line for debugging
            // Handle the response here
          },
          (error) => {
            // Handle HTTP error
            console.error('Error fetching agency cars:', error);
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
