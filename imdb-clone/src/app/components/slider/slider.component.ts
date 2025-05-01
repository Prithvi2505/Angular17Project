import { Observable } from 'rxjs';
import { MoviesService } from './../../services/movies.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Component, Input, OnInit} from '@angular/core';
import { Movie, MovieDto } from '../../type/movie';
import { imageBaseUrl } from '../../type/image_size';

@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  animations: [
    trigger("slideFade",[
      state('void', style({opacity:0})),
      transition('void <=>*',[animate('1s')]),
    ])


  ]
})
export class SliderComponent implements OnInit {

  @Input() slides : Movie[] = []
  @Input() isHeader = false
  
  slideIndex = 0 ;
  baseUrl = imageBaseUrl;
 
 ngOnInit(){
  if(!this.isHeader){
   this.changeSlide();
  }
 }
  changeSlide() {
    // this.movies$ = this.moviesService.getMovieByType('popular')
   setInterval(() => {
    this.slideIndex += 1;
    if(this.slideIndex > 10){
      this.slideIndex = 0;
    }
   }, 5000)
  }
}


