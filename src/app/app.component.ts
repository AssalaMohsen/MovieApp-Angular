import { Component , OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationGuard } from './authentication.guard';
import { FavoritesService } from './favorites.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'noxe';

  constructor(private _AuthenticationGaurd:AuthenticationGuard, private _FavoritesService:FavoritesService){}
  ngOnInit()
  {
    this._AuthenticationGaurd.canActivate();
    this._FavoritesService.getFavorites();
   
  }

  
}
