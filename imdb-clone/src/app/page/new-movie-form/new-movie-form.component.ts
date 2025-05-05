import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres } from '../../type/movie';
import { MoviesService } from '../../services/movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewMovieService } from '../../services/new-movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie-form',
  templateUrl: './new-movie-form.component.html',
  styleUrl: './new-movie-form.component.css'
})
export class NewMovieFormComponent implements OnInit {
genres$ !: Observable<Genres[]>

newMovieForm = new FormGroup({
  id : new FormControl('',Validators.required),
  name: new FormControl('', Validators.required),
  genre: new FormControl('',Validators.required),
  releaseDate : new FormControl('', Validators.required),
  duration : new FormControl('',Validators.required ),
})

constructor( private movieService:MoviesService,private newMovieservice: NewMovieService, private router:Router) {}

ngOnInit(){
    this.genres$ = this.movieService.getMovieGenres();
}

addMovie(){
  if(this.newMovieForm.valid){
    console.log(this.newMovieForm.value)
    this.newMovieservice.addNewMovie(this.newMovieForm.value).subscribe( res =>{
      this.router.navigate(['/home']);

    })
    
  }
  else{
    alert("Please fill all the fields")
  }
}

}
