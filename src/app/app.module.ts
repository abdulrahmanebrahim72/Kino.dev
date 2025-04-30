import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './business-component/home/home.component';
import { NavbarComponent } from './base-components/navbar/navbar.component';
import { MoviesComponent } from './business-component/movies/movies.component';
import { TvComponent } from './business-component/tv/tv.component';
import { AboutComponent } from './business-component/about/about.component';
import { NetworksComponent } from './business-component/networks/networks.component';
import { TrendingComponent } from './business-component/trending/trending.component';
import { NotfoundComponent } from './base-components/notfound/notfound.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./base-components/footer/footer.component";
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './business-component/main-slider/main-slider.component';
import { MovieDetailsComponent } from './business-component/movie-details/movie-details.component';
import { TvDetailsComponent } from './business-component/tv-details/tv-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        MoviesComponent,
        TvComponent,
        AboutComponent,
        NetworksComponent,
        TrendingComponent,
        NotfoundComponent,
        MainSliderComponent,
        MovieDetailsComponent,
        TvDetailsComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule, BrowserAnimationsModule, 
        CarouselModule, ReactiveFormsModule, FooterComponent, NgxPaginationModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
