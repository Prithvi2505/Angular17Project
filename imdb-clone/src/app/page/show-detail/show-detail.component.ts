import { Movie } from './../../type/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { ImageSizes } from '../../type/image_size';
import { Video } from '../../type/videos';
import { Image } from '../../type/images';
import { Actor } from '../../type/credits';
import { TvShowService } from '../../services/tv-show.service';
import { mapToMovie, mapToMovies } from '../../type/tvshow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  standalone: false,
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.css'
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  showType: 'tv' | 'movie' = 'movie';
  imageSize = ImageSizes;
  show$ !: Observable<Movie>;
  showVideos$ !: Observable<Video[]>
  showImages$ !: Observable<Image[]>
  showCast$ !: Observable<Actor[]>
  similarShows$ !: Observable<Movie[]>
  constructor(private route: ActivatedRoute, private movieService: MoviesService, private tvShowService : TvShowService, private router: Router) {}

  ngOnInit() {
    this.showId = this.route.snapshot.params['id'];
    this.showType = this.route.snapshot.params['type'];
    if(this.showType === 'movie'){
        this.show$ = this.movieService.getMovieById(this.showId)
      this.showVideos$ = this.movieService.getMovieVideo(this.showId)
      this.showImages$ = this.movieService.getMovieImage(this.showId)
      this.showCast$ = this.movieService.getMovieCast(this.showId)
      this.similarShows$ = this.movieService.getSimilarMovies(this.showId,12)
    }
    if(this.showType === 'tv'){
      this.show$ = this.tvShowService
        .getTvShowById(this.showId)
        .pipe(map(mapToMovie));
      this.showVideos$ = this.tvShowService.getTvShowVideos(this.showId);
      this.showImages$ = this.tvShowService.getTvShowImages(this.showId);
      this.showCast$ = this.tvShowService.getTvShowCast(this.showId);
      this.similarShows$ = this.tvShowService
        .getTvShowSimilar(this.showId)
        .pipe(map(mapToMovies));
    }
  }

 

}
