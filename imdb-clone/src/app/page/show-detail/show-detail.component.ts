import { Movie } from './../../type/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { ImageSizes } from '../../type/image_size';
import { Video } from '../../type/videos';

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
  constructor(private router: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
    })
    this.show$ = this.movieService.getMovieById(this.showId)
    this.showVideos$ = this.movieService.getMovieVideo(this.showId)
  }

}
