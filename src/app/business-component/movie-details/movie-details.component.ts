import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  standalone: false
})
export class MovieDetailsComponent implements OnInit {

  movie:any;
  movieId:any;

  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute, private titleService: Title) {
    this._ActivatedRoute.paramMap.subscribe((parameters) => 
      {
        this.movieId = parameters.get('_id');
      });
  }

  ngOnInit(): void {
    this.gitMDetails();
  }

  gitMDetails(){
    this._MoviesService.getMovieDetails(this.movieId).subscribe((data)=>
      {
        this.movie = data;
        this.titleService.setTitle(`Kino - ${this.movie.title} (${this.movie.release_date.split("-")[0]})`);
      });
  }

}
