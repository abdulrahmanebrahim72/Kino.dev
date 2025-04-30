import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
  
  imgSrc:string = "https://image.tmdb.org/t/p/w500/";
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople: any[] = [];
  
  constructor(_MoviesService:MoviesService){
    
    _MoviesService.getTrending("movie").subscribe((data)=>{
      for(let i=0;i<10;i++){this.trendingMovies.push(data.results[i]);}
    });

    _MoviesService.getTrending("tv").subscribe((data)=>{
      for(let i=0;i<10;i++){this.trendingTv.push(data.results[i]);}
    });

    _MoviesService.getTrending("person").subscribe((data)=>{
      for(let i=0;i<10;i++)
      {
        if(data.results[i].profile_path == null)
        {
          data.results[i].profile_path = "../../../assets/nf.jpg";
          this.trendingPeople.push(data.results[i]);
        }
        else
        {
          data.results[i].profile_path = this.imgSrc + data.results[i].profile_path;
          this.trendingPeople.push(data.results[i]);
        }
        
      }
    });

  }

}
