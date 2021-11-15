import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = '0f2262db1a835edfabfefe0b6da81890';

  constructor(private _HttpClient:HttpClient) {}

  
  getTrendingMovies():Observable<any>
  {
  let apiLink = `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`;
   let response =  this._HttpClient.get(apiLink);
   return response;
  }
  
  getTrendingTvShows():Observable<any>
  {
  let apiLink = `https://api.themoviedb.org/3/trending/tv/day?api_key=${this.apiKey}`;
   let response =  this._HttpClient.get(apiLink);
   return response;
  }

  getMovies(category:string,pageIndex:string):Observable<any>
  {
  let apiLink = `https://api.themoviedb.org/3/movie/${category}?api_key=${this.apiKey}&page=${pageIndex}`;
   let response =  this._HttpClient.get(apiLink);
   return response;
  }

  getMovieDetails(id:string):Observable<any>{
    let apiLink = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&append_to_response=videos,recommendations,images,credits,reviews`;
    let response =  this._HttpClient.get(apiLink);
    return response;
  }

  getTvShows(category:string,pageIndex:string):Observable<any>
  {
  let apiLink = `https://api.themoviedb.org/3/tv/${category}?api_key=${this.apiKey}&page=${pageIndex}`;
   let response =  this._HttpClient.get(apiLink);
   return response;
  }

  getTvShowDetails(id:string):Observable<any>{
    let apiLink = `https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&append_to_response=videos,recommendations,images,credits,reviews`;
    let response =  this._HttpClient.get(apiLink);
    return response;
  }

  getSearchResults(keyword:string,pageIndex:string):Observable<any>{
    let apiLink = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&page=${pageIndex}&query=${keyword}`;
    let response =  this._HttpClient.get(apiLink);
    return response;
  }
}
