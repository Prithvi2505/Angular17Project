import { Genres, Movie, MovieDto } from './../../type/movie';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent  implements OnInit{
  genres$ !: Observable<Genres[]>
  genresMovie$ !: Observable<Movie[]>
  genreId = '';

  constructor(private route: ActivatedRoute, private movieService:MoviesService) {}

  ngOnInit() {
    
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.genresMovie$ = this.movieService.getMoviesByGenresId(this.genreId);
    });
    this.genres$ = this.movieService.getMovieGenres();
  }
 

}
