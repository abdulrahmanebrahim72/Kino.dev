import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './business-component/about/about.component';
import { HomeComponent } from './business-component/home/home.component';
import { MoviesComponent } from './business-component/movies/movies.component';
import { TrendingComponent } from './business-component/trending/trending.component';
import { TvComponent } from './business-component/tv/tv.component';
import { MovieDetailsComponent } from './business-component/movie-details/movie-details.component';
import { TvDetailsComponent } from './business-component/tv-details/tv-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent, title:'Kino - Home'},
  {path:'about' , component:AboutComponent, title:'Kino - About'},
  {path:'movies/:_cat' , component:MoviesComponent},
  {path:'tv/:_cat' , component:TvComponent},
  {path:'trending' , component:TrendingComponent, title:'Kino - Trending'},
  {path:'movieDetails/:_id' , component:MovieDetailsComponent},
  {path:'tvDetails/:_id' , component:TvDetailsComponent},
  {path:'**' , redirectTo:'home' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
