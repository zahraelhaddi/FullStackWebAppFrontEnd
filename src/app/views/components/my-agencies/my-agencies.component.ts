import { Component } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-my-agencies',
  templateUrl: './my-agencies.component.html',
  styleUrls: ['./my-agencies.component.sass']
})
export class MyAgenciesComponent {
  agencies: any; // Holds the list of agencies

  constructor(private agenciesService: AgenciesService,private usersService:UsersService) {}

  ngOnInit(): void {
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
}
