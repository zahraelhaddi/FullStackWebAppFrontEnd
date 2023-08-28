import { Component } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.sass']
})
export class AgenciesComponent {

  agencies: any;
    messageSuccess=''



  constructor(private agenciesService:AgenciesService) {
    
   this.getAllagencies()   

  }
  ngOnInit(): void {
  }

  getAllagencies() {
    this.agenciesService.getAllagencies().subscribe(
      (data: any) => {
        this.agencies = data;
      },
      (error) => {
        console.error(error);
      }
    ); 
  }

  

}
