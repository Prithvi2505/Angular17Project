import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie, MovieDto } from '../../type/movie';
import { map, Observable } from 'rxjs';
import { TvShowService } from '../../services/tv-show.service';
import { mapToMovie } from '../../type/tvshow';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  popularMovies$ !: Observable<Movie[]>
  upcomingMovies$ !: Observable<Movie[]>
  topRatedMovies$ !: Observable<Movie[]>  
  populartvShow$ !: Observable<Movie[]>
  constructor(private moviesService:MoviesService, private tvShowService:TvShowService) {}

  ngOnInit() {
    this.popularMovies$ = this.moviesService.getMovieByType('popular');
    this.upcomingMovies$ = this.moviesService.getMovieByType('upcoming',12);
    this.topRatedMovies$ = this.moviesService.getMovieByType('top_rated',12);
    this.populartvShow$ = this.tvShowService.getTvShowByType('popular',12).pipe(
      map(mapToMovie)
    )

  }

}
