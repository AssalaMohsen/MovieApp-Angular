import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites = new BehaviorSubject({ids:[],objects:[]});

  constructor() { }

  getFavorites()
  {
    if (localStorage.getItem("favorites") === null) {
      this.favorites = new BehaviorSubject({ids:[],objects:[]});
    }
    else {
      let fav:any = localStorage.getItem("favorites");
      this.favorites.next(JSON.parse(fav));
    }
  }

  setFavorites(newFav:any)
  {
    this.favorites.next(newFav);
    localStorage.setItem("favorites", JSON.stringify(this.favorites.value));
  }
}
