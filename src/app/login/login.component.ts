import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  invalidCredentials: boolean = false;
  dataLoaded: boolean = true;

  login(userData:any){
    this._AuthenticationService.login(userData.value).subscribe((response:any)=>{
      this.dataLoaded = true;
      if(response.message == 'success')
      {
        this._AuthenticationService.setAuthenticatedUser(response);
        this._Router.navigate(['/home']);
      }
      else{
        this.invalidCredentials = true;
      }
    });
  }
  getData(userData: any) {
    this.dataLoaded = false;
    if (userData.valid) {
      this.login(userData);
    }
  }
  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router, private _TilteService: Title) { }

  ngOnInit(): void {
    this._TilteService.setTitle(this.title);
  }

}
