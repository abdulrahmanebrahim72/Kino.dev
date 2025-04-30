import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-tv',
    templateUrl: './tv.component.html',
    styleUrls: ['./tv.component.scss'],
    standalone: false
})
export class TvComponent implements OnInit {

    tvList:any[] = [];
    tvCat:any
    imgSrc:string = "https://image.tmdb.org/t/p/w500/";
    title:any;
    curentPage:number = 1;
    total:number = 0;
  
    constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) {}
  
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((parameters) => {
        this.tvCat = parameters.get('_cat');
        this.gitSpecificTv();
        switch (this.tvCat) {
          case "popular": this.title = "Popular";break;
          case "airing_today": this.title = "Airing Today";break;
          case "top_rated": this.title = "Top Rated";break;
          case "on_the_air": this.title = "On The Air";break;
        }
      });
    }
  
    gitSpecificTv(pageNum:number = 1){
      if (this.tvCat) {
        this._MoviesService.getSpecificTvShows(this.tvCat, pageNum).subscribe((data)=>
        {
          this.tvList = data.results;
          this.curentPage = data.page;
          this.total = data.total_results;
        });
      }
    }

    pageChanged(event:any){
      this.gitSpecificTv(event);
    }
  
  }
  