import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) { }
  
  getTrending(category:string, pNum:number=1):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${category}/day?page=${pNum}&api_key=866cd3a065ef9304a549f1d65e494940`);
  }
  getMovieDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=866cd3a065ef9304a549f1d65e494940`);
  }
  getTvDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=866cd3a065ef9304a549f1d65e494940`);
  }
  getSpecificTvShows(cat:string, pNum:number=1):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${cat}?page=${pNum}&api_key=866cd3a065ef9304a549f1d65e494940`);
  }
  getSpecificMovies(cat:string, pNum:number=1):Observable<any>
  {
    if(pNum > 500){pNum = 500;}
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${cat}?page=${pNum}&api_key=866cd3a065ef9304a549f1d65e494940`);
  }
  searchOnMovies(sValue:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?query=${sValue}&include_adult=false&language=en-US&page=1&api_key=866cd3a065ef9304a549f1d65e494940`);
  }

}
