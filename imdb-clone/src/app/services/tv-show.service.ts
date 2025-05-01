import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { tvshowDto } from '../type/tvshow';

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
}
