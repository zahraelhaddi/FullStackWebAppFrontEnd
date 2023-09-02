import { Component } from '@angular/core';
import { TransfersService } from 'src/app/services/transfers.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-my-transfers',
  templateUrl: './my-transfers.component.html',
  styleUrls: ['./my-transfers.component.sass']
})
export class MyTransfersComponent {
  transfers: any; // Holds the list of transfers

  constructor(private transfersService: TransfersService,private usersService:UsersService) {}

  ngOnInit(): void {
    // Retrieve the currently logged-in user's ID
    const userId = this.usersService.getUserIdFromToken(); 
    //console.log(userId)

    // Fetch transfers associated with the logged-in user's ID
    this.transfersService.getUserTransfers(userId).subscribe(
      (response) => {
       //console.log(response)
        this.transfers = response;
      },
      (error) => {
        console.error('Error fetching transfers:', error);
      }
    );
  }

  
}


