import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Tvshow, tvshowDto } from '../type/tvshow';
import { VideoDto } from '../type/videos';
import { ImagesDto } from '../type/images';
import { CreditDto } from '../type/credits';

@Injectable({
  providedIn: 'root'
})
export class TvShowService { 
  private apiUrl = "https://api.themoviedb.org/3";
  private apikey = "489c39bd367015e71001ee37c6ac7412";

  constructor(private http: HttpClient) { }

  getTvShowByType(type:string, count=20) {
    return this.http
    .get<tvshowDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apikey}`).pipe(map((data) => {
      return data.results.slice(0,count)
    }));
  }
  getTvShowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.apiUrl}/tv/${id}?api_key=${this.apikey}`
    );
  }

  getTvShowVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/tv/${id}/videos?api_key=${this.apikey}`)
      .pipe(map((data) => data.results));
  }

  getTvShowImages(id: string) {
    return this.http
      .get<ImagesDto>(`${this.apiUrl}/tv/${id}/images?api_key=${this.apikey}`)
      .pipe(map((data) => data.backdrops));
  }

  getTvShowCast(id: string) {
    return this.http
      .get<CreditDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apikey}`)
      .pipe(map((data) => data.cast));
  }

  getTvShowSimilar(id: string) {
    return this.http
      .get<tvshowDto>(`${this.apiUrl}/tv/${id}/similar?api_key=${this.apikey}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';
    return this.http.get<tvshowDto>(
      `${this.apiUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apikey}`
    );
  }
}
