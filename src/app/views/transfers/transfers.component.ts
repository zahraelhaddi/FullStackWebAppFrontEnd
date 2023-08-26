import { Component } from '@angular/core';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass']
})
export class TransfersComponent {
  constructor(private transfersService:TransfersService) {
 
    this.transfersService.getAlltransfers().subscribe(data=>console.log(data))
   }
  ngOnInit(): void {
  }
}
