import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( public _router: Router ) {}
  canActivate(): boolean {
    if ( localStorage.getItem('token') && localStorage.getItem('token').length > 5 ) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
