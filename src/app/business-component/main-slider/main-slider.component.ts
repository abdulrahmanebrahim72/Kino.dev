import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss',
  standalone: false,
})
export class MainSliderComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.getSliderImages();
  }

  getSliderImages(){
    this._MoviesService.getSpecificMovies("upcoming").subscribe((data)=>{
      for(let i=0;i<20;i++){this.slidesStore.push(data.results[i]);}
    });
  }

  slidesStore: any[] = [];
  imgSrc:string = "https://image.tmdb.org/t/p/w500/";

  //carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    nav: true,
    navText: ['' , ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    }
  }

}
