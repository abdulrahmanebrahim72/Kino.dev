import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {

    searchValue:string = '';
    result:any[] = [];
    imgSrc:string = "https://image.tmdb.org/t/p/w500/";

    constructor(private _MoviesService:MoviesService, private _Router:Router) {}

    movieSearch(){
        if(this.searchValue.length > 0){
            this._MoviesService.searchOnMovies(this.searchValue).subscribe((response) => {
                this.result = response.results;
            });
        }else{
            this.result = [];
        }
    }

    refreshMovieDetails(mId:any){
        window.location.pathname = `/movieDetails/${mId}`;
    }

}
