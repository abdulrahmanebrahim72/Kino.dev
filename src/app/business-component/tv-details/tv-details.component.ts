import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.scss',
  standalone: false
})
export class TvDetailsComponent implements OnInit {

  tv:any;
  tvId:any;

  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute, private titleService: Title) {
    this._ActivatedRoute.paramMap.subscribe((parameters) => 
      {
        this.tvId = parameters.get('_id');
      });
  }

  ngOnInit(): void {
    this.gitTvDetails();
  }

  gitTvDetails(){
    this._MoviesService.getTvDetails(this.tvId).subscribe((data)=>
    {
      this.tv = data;
      this.titleService.setTitle(`Kino - ${this.tv.name} (${this.tv.first_air_date.split("-")[0]})`);
    });
  }

}
