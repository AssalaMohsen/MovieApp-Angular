import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../authentication.service';
import { FavoritesService } from '../favorites.service';
declare var $: any;
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: any;
  authenticated:any;

  constructor(private _FavoritesService: FavoritesService, private _ApiService: ApiService, private _AuthenticationService:AuthenticationService) { }

  openFavorites() {
    if ($('.sidebar-container').css("right") == "0px") {
      $(".sidebar-container").attr("style", `right:-${$("#sidebar").css("width")}px`);
    } else {
      $(".sidebar-container").attr("style", "right:0");
    }
  }

  ngOnInit(): void {
    this._AuthenticationService.isAuthenticated.subscribe((value)=>{ this.authenticated = value; });
    let fav: any;
    this._FavoritesService.favorites.subscribe(data => {
      fav = data;
      this.favorites = [...fav.objects].reverse();
     
    });
  
  }

}
