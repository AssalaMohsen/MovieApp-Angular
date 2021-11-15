import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}
  canActivate(){
    if(localStorage.getItem("userData") === null)
    {
      this._Router.navigate(['/login']);
      return false;
    }
    this._AuthenticationService.isAuthenticated.next(true);
    let userToken:any =  localStorage.getItem("userData");
    this._AuthenticationService.token = userToken;
    
    let userObj:any = jwt_decode(userToken || '');
    this._AuthenticationService.userData.next(userObj);
    return true;
 
  }
  
}
