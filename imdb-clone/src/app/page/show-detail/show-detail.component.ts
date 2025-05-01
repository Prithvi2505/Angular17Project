import { Movie } from './../../type/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { ImageSizes } from '../../type/image_size';
import { Video } from '../../type/videos';
import { Image } from '../../type/images';
import { Actor } from '../../type/credits';

@Component({
  selector: 'app-show-detail',
  standalone: false,
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.css'
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  imageSize = ImageSizes;
  show$ !: Observable<Movie>;
  showVideos$ !: Observable<Video[]>
  showImages$ !: Observable<Image[]>
  showCast$ !: Observable<Actor[]>
  similarMovies$ !: Observable<Movie[]>
  constructor(private router: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
    })
    this.show$ = this.movieService.getMovieById(this.showId)
    this.showVideos$ = this.movieService.getMovieVideo(this.showId)
    this.showImages$ = this.movieService.getMovieVImage(this.showId)
    this.showCast$ = this.movieService.getMovieVCast(this.showId)
    this.similarMovies$ = this.movieService.getSimilarMovies(this.showId,12)
  }

}
