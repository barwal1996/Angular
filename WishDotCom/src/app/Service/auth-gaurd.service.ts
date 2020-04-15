import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdServiceCanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isCustomerLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
}
