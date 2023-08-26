import { Component } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.sass']
})
export class AgenciesComponent {
  constructor(private agenciesService:AgenciesService) {
 
    this.agenciesService.getAllagencies().subscribe(data=>console.log(data))
   }
  ngOnInit(): void {
  }
}
