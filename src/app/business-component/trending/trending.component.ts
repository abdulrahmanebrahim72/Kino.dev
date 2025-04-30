import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
    selector: 'app-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss'],
    standalone: false
})
export class TrendingComponent  implements OnInit {

  imgSrc:string = "https://image.tmdb.org/t/p/w500/";
  trendingMovies:any[] = [];
  curentPage:number = 1;
  total:number = 0;
  
  constructor(private _MoviesService:MoviesService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(pageNum:number = 1){
    this._MoviesService.getTrending("all",pageNum).subscribe((data)=>
    {
      this.trendingMovies = data.results;
      this.curentPage = data.page;
      this.total = data.total_results;
    });
  }

  pageChanged(event:any){
    this.getData(event);
  }

}
