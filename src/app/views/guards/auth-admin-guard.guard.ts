// auth-admin.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.usersService.hasSpecificAdminToken()) {
      return true;
    } else {
      this.router.navigate(['/users']); 
      alert('Vous avez pas l\'accèss à cette fonctionalitée ')
      return false;
    }
  }
}
