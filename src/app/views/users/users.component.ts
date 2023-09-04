import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { PaginationInstance } from 'ngx-pagination';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit{
  users:any;
  filteredusers: any;
  constructor(private usersService:UsersService) {
 
    
   }
  ngOnInit(): void {
    this.getAllusers()
  }
   getAllusers(){
    this.usersService.getAllusers().subscribe((data)=>{
      this.users=data
      this.filteredusers = this.users
    },(error)=>{
      console.error(error)
    })
   }

   login(f:any){
    let data=f.value
    console.log(data)

    this.usersService.loginAdmin(data).subscribe(response=>{console.log(response),(error: any)=>
      console.log(error)
    
   })
  }
  searchTerm: string = '';
  
  config: PaginationInstance = {
    itemsPerPage: 8,
    currentPage: 1
  }; 


  pageChanged(event: any) {
    this.config.currentPage = event;
  }

applyFilter() {
  const searchTerm = this.searchTerm.toLowerCase();
    this.filteredusers = this.users.filter((user: { fullname: string; agency_id:number;user_id:number;email:string ;agency_info: { agency_location: string; agency_name:string;}; }) => {
    // You can add more fields to search if needed
    return (
      user.user_id.toString().includes(searchTerm) ||
        user.fullname.toLowerCase().includes(searchTerm) ||
        user.agency_id.toString().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.agency_info.agency_name.toLowerCase().includes(searchTerm) ||
        user.agency_info.agency_location.toLowerCase().includes(searchTerm)
    );
  });
}
}
