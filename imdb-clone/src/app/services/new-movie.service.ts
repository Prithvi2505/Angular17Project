import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewMovieService {
  apiUrl = 'http://localhost:3000/newMovie';
  constructor(private http:HttpClient) { }
  getNewMovies() {
    return this.http.get(this.apiUrl);
  }
  getByCode(code:any){
    return this.http.get(this.apiUrl+'/'+ code);
  }
  addNewMovie(inputData:any){
    return this.http.post(this.apiUrl,inputData);
  }
  updateMovieByCode(code:any, inputData:any){
    return this.http.put(this.apiUrl+'/'+code,inputData);
  }
  deleteMovieByCode(code:any) {
    return this.http.delete(this.apiUrl+'/'+ code);
  }
}
