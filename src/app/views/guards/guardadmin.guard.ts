// import { CanActivateFn } from '@angular/router';

// export const guardadminGuard: CanActivateFn = (route, state) => {

//   return true;
  
// };
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {
  constructor(private usersService:UsersService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve,reject)=>{
      if(this.usersService.LoggedIn()==true){
      resolve(true)
    }
    else{
      this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
      localStorage.removeItem('token')
      resolve(false)

    }
    })

    
   
  }
  
}