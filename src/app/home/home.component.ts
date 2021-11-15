import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'Home';
  movies:any;
  tvShows:any;

  moviesLoaded: boolean = false;
  tvShowsLoaded: boolean = false;

  constructor(private _ApiService:ApiService,private _TilteService:Title) {
  }

  loadTrendingMovies()
  {
    this._ApiService.getTrendingMovies().subscribe((x)=>{
      this.movies = x.results.slice(0,10);
      this.moviesLoaded = true;
     });
  }

  loadTrendingTvShows()
  {
    this._ApiService.getTrendingTvShows().subscribe((x)=>{
      this.tvShows = x.results.slice(0,10);
      this.tvShowsLoaded = true;
     });
  }



  ngOnInit(): void {
    this._TilteService.setTitle(this.title);
    this.loadTrendingMovies();
    this.loadTrendingTvShows();    
  }


}
