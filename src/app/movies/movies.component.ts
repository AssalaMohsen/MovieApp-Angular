import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = "Movies";
  pageIndex:any;
  pagesLength:any;
  movies:any;
  category:any;
  endOfPages=false;
  
  dataLoaded:boolean = false;
  moreLoaded:boolean = true;

  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute,private _TilteService:Title) { 
   
  }

  loadMore()
  {
    this.moreLoaded = false;
    this.pageIndex = (parseInt(this.pageIndex) + 1).toString();
    this.loadMovies();
    if (this.pageIndex == this.pagesLength) {
      this.endOfPages = true;
    }
  }


  loadMovies()
  {
    this._ApiService.getMovies(this.category,this.pageIndex).subscribe((response)=>{
      this.movies = [...this.movies,...response.results];
      this.dataLoaded = true;
      this.moreLoaded = true;
      this.pagesLength ='' + response.total_pages;
      if (this.pageIndex == this.pagesLength) {
        this.endOfPages = true;
      }
     });
  }

  

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(()=>{
      this._TilteService.setTitle(this.title);
      this.pageIndex = '1';
      this.movies = [];
      this.category = this._ActivatedRoute.snapshot.params.category;
      this.dataLoaded = false;
      this.loadMovies()
    });
  }

}
