import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
  animations: [
    trigger('activeSlide', [
      state('active', style({
        transform: 'scale(1.4)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'scale(0.7)',
        opacity: 0.8,
      })),
      transition('active => inActive', [
        animate('0.5s')
      ]),
      transition('inActive => active', [
        animate('0.5s')
      ])
    ])
  ]
})

export class TvShowDetailsComponent implements OnInit {

  id: string = '';
  tvShowDetails: any;
  recommendations: any;
  backdrops: any;
  videos: any;
  cast:any;
  reviews:any;
  imgSrc = 'https://image.tmdb.org/t/p/w500/';

  backdropsCollection: any;
  videoCollection: any;

  dataLoaded:boolean = false;
 
  customOptions: OwlOptions = {
    margin:0,
    mouseDrag: true,
    touchDrag: true,
    navSpeed: 300,
    navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
    dots: false,
    nav: true,
    slideBy: 5,
    responsive: {
      0: {
        items: 2,
        slideBy: 2
      },
      400: {
        items: 2
      },
      576: {
        items: 3
      }
      ,
      740: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
  }


  constructor(private _ApiService: ApiService, private _ActivatedRoute: ActivatedRoute,private _TilteService:Title) {

  }

  showReview(e:any)
  {
    e.target.previousElementSibling.classList.toggle('show');
    e.target.innerText = e.target.innerText == 'Show More' ? 'Show Less' : 'Show More';
  }


  getOfficialTrailerKey() {
    let results = this.videos;
    if (results.length == 0) {
      return '';
    }
    for (let i = 0; i < results.length; i++) {
      if (results[i].name == "Official Trailer") { return results[i].key }
    }
    return results[0].key;
  }

  loadTvShowDetails() {

    this._ApiService.getTvShowDetails(this.id).subscribe((tvShow) => {
      
      this.tvShowDetails = tvShow;

      this.dataLoaded = true;
      this._TilteService.setTitle(this.tvShowDetails.name);

      this.cast= this.tvShowDetails.credits.cast;
      this.recommendations = this.tvShowDetails.recommendations.results;
      this.reviews = this.tvShowDetails.reviews.results;

      this.backdrops = this.tvShowDetails.images.backdrops;
      this.backdropsCollection = [];
      this.backdrops.forEach((element: any) => {
        this.backdropsCollection.push({ image: this.imgSrc + element.file_path, thumbImage: this.imgSrc + element.file_path });
      });

      this.videos = this.tvShowDetails.videos.results;
      this.videoCollection = [];
      this.videos.forEach((element: any) => {
        this.videoCollection.push({ video: 'https://youtu.be/' + element.key });
      });

      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => { 
      this.id = this._ActivatedRoute.snapshot.params.tvShowId;
      this.dataLoaded = false;
      this.loadTvShowDetails();
    });
  }

}
