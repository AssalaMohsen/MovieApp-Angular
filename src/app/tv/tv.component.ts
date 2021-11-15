import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  title = "TvShows";
  pageIndex: any;
  pagesLength: any;
  tvShows: any;
  category: any;
  endOfPages = false;

  dataLoaded: boolean = false;

  moreLoaded:boolean = true;

  constructor(private _ApiService: ApiService, private _ActivatedRoute: ActivatedRoute, private _TilteService: Title) {
  }

  loadMore() {
    this.moreLoaded = false;
    this.pageIndex = (parseInt(this.pageIndex) + 1).toString();
    this.loadTvShows();
    if (this.pageIndex == this.pagesLength) {
      this.endOfPages = true;
    }
  }

  loadTvShows() {
    this._ApiService.getTvShows(this.category, this.pageIndex).subscribe((response) => {
      this.tvShows = [...this.tvShows, ...response.results];
      this.dataLoaded = true;
      this.moreLoaded = true;
      this.pagesLength = response.total_pages;
      if (this.pageIndex == this.pagesLength) {
        this.endOfPages = true;
      }
    });
  }



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(() => {
      this.pageIndex = '1';
      this.tvShows = [];
      this._TilteService.setTitle(this.title);
      this.category = this._ActivatedRoute.snapshot.params.category;
      this.dataLoaded = false;
      this.loadTvShows();
    });
  }

}
