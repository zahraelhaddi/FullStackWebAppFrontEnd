import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.sass']
})
export class AgenciesComponent {

  agencies: any;
    messageSuccess:any;
  messageErr: any;
  dataAgency={
    agency_id:0,
    agency_name:'',
    agency_location:''
  }
  filteredagencies: any;
  message: any;


  constructor(private agenciesService:AgenciesService) {
    
   this.getAllagencies()   

  }
  ngOnInit(): void {
  }

  getAllagencies() {
    this.agenciesService.getAllagencies().subscribe(
      (data: any) => {
        this.agencies = data;
        this.filteredagencies=this.agencies;
      },
      (error) => {
        console.error(error);
      }
    ); 
  }
  addAgency(f:any){
    let data=f.value
    //console.log(data)
    this.agenciesService.addAgency(data).subscribe(response=>{
      console.log(response); 
            this.agencies=null;
             this.getAllagencies();
             this.message=response
             if(this.message.msg==='Agence ajoutée avec Succès!'){
              this.messageSuccess=this.message.msg
             }else if(this.message.msg==='Agence existe déjà!'){
              this.messageErr=this.message.msg
             }
    },(err)=>{ 
      this.messageErr=err.error
      console.log(err.error)
      // console.log(err.status)
    })
  }

  delete(id:any,i:number){

    this.agenciesService.deleteAgency(id).subscribe(response=>{
      console.log(response)
       this.agencies.splice(i,1)

    })

  }


  getdata(agency_id:number,agency_name:string,agency_location:string){
  
    this.messageSuccess=''
    this.dataAgency.agency_id=agency_id
   this.dataAgency.agency_name=agency_name
   this.dataAgency.agency_location=agency_location
   console.log(this.dataAgency)

 }
 
  updateAgency(updateForm:any){
    let data=updateForm.value
    console.log(data)
  this.agenciesService.update(this.dataAgency.agency_id,data).subscribe(response=>
    {
    console.log(response)
      let indexId=this.agencies.findIndex((obj:any)=>obj.agency_id==this.dataAgency.agency_id)
      //console.log(indexId)
      //console.log(typeof this.dataAgency.agency_id)
      
      this.agencies[indexId].agency_id=Number(this.dataAgency.agency_id)
      this.agencies[indexId].agency_name=data.agency_name
      this.agencies[indexId].agency_location=data.agency_location

      console.log(this.agencies[indexId])

      this.messageSuccess=`this agency ${this.agencies[indexId].agency_name} is updated`


    },(err:HttpErrorResponse)=>{
      console.log(err)
    
    })
  }

  config: PaginationInstance = {
    itemsPerPage: 8,
    currentPage: 1
  };
  
  // Search filter
  searchTerm: string = '';
  
  // 
  pageChanged(event: any) {
    this.config.currentPage = event;
  }

applyFilter() {
  const searchTerm = this.searchTerm.toLowerCase();
  this.filteredagencies = this.agencies.filter((agency: {  agency_id:number;agency_location:string;}) => {
    return (
      agency.agency_id.toString().includes(searchTerm)
      ||      agency.agency_location.toLowerCase().includes(searchTerm
    )
  )});
}

}
