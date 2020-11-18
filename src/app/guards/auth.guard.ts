import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,
    private authService: AuthService){}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if (!await this.authService.isLoggedIn())
      return this.router.parseUrl('/login');
    else
      return true;
  }

}
