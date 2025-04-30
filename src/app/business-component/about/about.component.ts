import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent {


constructor(_MoviesService:MoviesService){

}
}
