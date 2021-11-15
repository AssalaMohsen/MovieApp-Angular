import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  title = 'Search Results';
  searchValue: string = '';
  pageIndex: any;
  pagesLength: any;
  results: any;
  endOfPages = false;

  dataLoaded:boolean = false;
  moreLoaded:boolean = true;

  constructor(private _ApiService: ApiService, private _ActivatedRoute: ActivatedRoute, private _TilteService: Title) {
  }

  loadMore() {
    this.moreLoaded = false;
    this.pageIndex = (parseInt(this.pageIndex) + 1).toString();
    this.loadSearchResults();
    if (this.pageIndex == this.pagesLength) {
      this.endOfPages = true;
    }
  }

  loadSearchResults() {
    this._ApiService.getSearchResults(this.searchValue, this.pageIndex).subscribe((response) => {
      this.results = [...this.results, ...response.results];
      this.dataLoaded = true;
      this.moreLoaded = true;
      this.pagesLength = '' + response.total_pages;
      if (this.pageIndex == this.pagesLength) {
        this.endOfPages = true;
      }
    });
  }



  ngOnInit(): void {
    this._TilteService.setTitle(this.title);

    this._ActivatedRoute.paramMap.subscribe(()=>{
    this.pageIndex = '1';
    this.results = [];
    this.searchValue = this._ActivatedRoute.snapshot.params.searchValue;
    this.dataLoaded = false;
    this.loadSearchResults();
    });
  }
}
