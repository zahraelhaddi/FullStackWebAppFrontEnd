import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass']
})
export class TransfersComponent {
  transfers:any;
  messageSuccess: any;
  messageErr: any;

  constructor(private transfersService:TransfersService,private route:Router) {
 
    this.getAlltransfers()
   }
  ngOnInit(): void {
  }

  getAlltransfers(){
    this.transfersService.getAlltransfers().subscribe(
      (data: any) => {
        this.transfers = data;
      },
      (error) => {
        console.error(error);
      }
    ); 
  }

  add(f:any){
    let data=f.value
    console.log(data)
    this.transfersService.addTransfer(data).subscribe(response=>{
      //console.log(response); 
            this.transfers=null;
             this.getAlltransfers();
             this.messageSuccess=response
    },(err)=>{ 
      this.messageErr=err.error
      console.log(err.error)
      // console.log(err.status)
    })
  }


}
