import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
    standalone: false
})
export class MoviesComponent implements OnInit {

    movieList:any[] = [];
    movieCat:any
    imgSrc:string = "https://image.tmdb.org/t/p/w500/";
    title:any;
    curentPage:number = 1;
    total:number = 0;
  
    constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) {}
  
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((parameters) => {
        this.movieCat = parameters.get('_cat');
        this.gitSpecificMovies();
        switch (this.movieCat) {
          case "popular": this.title = "Popular";break;
          case "now_playing": this.title = "Now Playing";break;
          case "top_rated": this.title = "Top Rated";break;
          case "upcoming": this.title = "UpComing";break;
        }
      });
    }
  
    gitSpecificMovies(pageNum:number = 1){
      if (this.movieCat) {
        this._MoviesService.getSpecificMovies(this.movieCat, pageNum).subscribe((data)=>{
          this.movieList = data.results;
          this.curentPage = data.page;
          if(data.total_results > 10000){this.total = 10000;}
          else{this.total = data.total_results;}
        });
      }
    }

    pageChanged(event:any){
      this.gitSpecificMovies(event);
    }
  
  }
