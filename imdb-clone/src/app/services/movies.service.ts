import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieDto } from '../type/movie';
import { map } from 'rxjs';
import { VideoDto } from '../type/videos';
import { ImagesDto } from '../type/images';
import { CreditDto } from '../type/credits';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = "https://api.themoviedb.org/3";
  private apikey = "489c39bd367015e71001ee37c6ac7412";

  constructor(private http: HttpClient) { }

  getMovieByType(type:string, count=20) {
    return this.http
    .get<MovieDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apikey}`).pipe(map((data) => {
      return data.results.slice(0,count)
    }));
  }
  getMovieById(id:string) {
    return this.http
    .get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apikey}`);
  }
  getMovieVideo(id:string){
     return this.http
    .get<VideoDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apikey}`)
    .pipe(map((data) => {
      return data.results
    }));
  }
  getMovieVImage(id:string){
     return this.http
    .get<ImagesDto>(`${this.apiUrl}/movie/${id}/images?api_key=${this.apikey}`)
    .pipe(map((data) => {
      return data.backdrops
    }));
  }
  getMovieVCast(id:string){
     return this.http
    .get<CreditDto>(`${this.apiUrl}/movie/${id}/credits?api_key=${this.apikey}`)
    .pipe(map((data) => {
      return data.cast
    }));
  }
  getSimilarMovies(id:string, count=20) {
    return this.http
    .get<MovieDto>(`${this.apiUrl}/movie/${id}/similar?api_key=${this.apikey}`).pipe(map((data) => {
      return data.results.slice(0,count)
    }));
  }
}