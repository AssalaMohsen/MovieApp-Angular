import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms'
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  title = 'Register';
  success:any;

  dataLoaded: boolean = true;

  registerForm = new FormGroup({
    first_name : new FormControl(null,[Validators.required]),
    last_name : new FormControl(null,[Validators.required]),
    age : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.min(10),Validators.max(200)]),
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required])
  })

  getData(userData:any)
  {
   if(userData.valid)
   {
     this.dataLoaded = false;
     this.register(userData);
   }
  }

  register(userData:any)
  {
    this._AuthenticationService.signUp(userData.value).subscribe((response:any)=>{
      this.dataLoaded = true;
      if(response.message == ('success'))
      {
        this.registerForm.reset();
        this.success = true;
      }
      else{
        this.success = false;
      }
    });
  }

  constructor(private _AuthenticationService:AuthenticationService ,private _TilteService:Title) { }

  ngOnInit(): void {
    this._TilteService.setTitle(this.title);
  }

}
