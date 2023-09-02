import { Component } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-nbr-agencies',
  templateUrl: './nbr-agencies.component.html',
  styleUrls: ['./nbr-agencies.component.sass']
})
export class NbrAgenciesComponent {
  nbr:any;

  constructor(private agenciesService:AgenciesService){
    this.aaaAgencies()
  }


  ngOnInit(): void {}

  aaaAgencies() {

      this.agenciesService.getAgenciesNbr().subscribe(
        (response) => {
          this.nbr= response;
        },
        (error) => {
          // Handle HTTP error
          console.error('Error fetching nbr available cars:', error);
        }
      );
  }
}
