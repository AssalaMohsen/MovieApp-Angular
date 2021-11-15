import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = new BehaviorSubject(false);
  token = null;
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  setAuthenticatedUser(response:any)
  {
    this.isAuthenticated.next(true);
    this.token = response.token;
    localStorage.setItem('userData',response.token);
  }

  signUp(user:Observable<any>){
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',user);
  }

  login(user:Observable<any>)
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',user);
  }

  logout()
  {
    this.isAuthenticated.next(false);
    this.userData.next(null);
    localStorage.removeItem('userData');
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signot',this.token);
  }
}
