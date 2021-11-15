import { Component, OnInit , Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  imgSrc='https://image.tmdb.org/t/p/w500/';
  constructor(private _FavoritesService:FavoritesService) { }

  ngOnInit(): void {
    this.favorites = this._FavoritesService.favorites.value;
  }

  @Input() item:any;
  favorites:any;

  
  ToggleFavorite(e:any)
  {
    if(this.favorites.ids.includes(this.item.id.toString()))
    {
      e.target.classList.remove('favorite');
      let ind  = this.favorites.ids.indexOf(this.item.id.toString());
      this.favorites.ids = this.favorites.ids.filter((element:any) => {
        return element!=this.item.id.toString();
      });
      this.favorites.objects= this.favorites.objects.filter((element:any,index:any) => {
        return index != ind;
      });
      
    }
    else{
      e.target.classList.add('favorite');
      this.favorites.ids.push(this.item.id.toString());
      this.favorites.objects.push(this.item);
    }
    this._FavoritesService.setFavorites(this.favorites);
    console.log(this.favorites)
  }

}
