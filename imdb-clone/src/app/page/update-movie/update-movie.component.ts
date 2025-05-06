import { Component, Inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { NewMovieService } from '../../services/new-movie.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Genres, newMovie } from '../../type/movie';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent {
  genres$ !: Observable<Genres[]>
  editData:any;
  updateMovieForm = new FormGroup({
    id : new FormControl(''),
    name: new FormControl(''),
    genre: new FormControl(''),
    releaseDate : new FormControl(''),
    duration : new FormControl(''),
  })


  
  constructor( 
    private movieService:MoviesService,
    private newMovieservice: NewMovieService,
     private router:Router, 
     @Inject(MAT_DIALOG_DATA) public data:any,
     private dialog :MatDialogRef<UpdateMovieComponent>,
    ) {}
  
  ngOnInit(){
      this.genres$ = this.movieService.getMovieGenres();

      if(this.data.moviecode !== null && this.data.moviecode !==''){
        this.newMovieservice.getByCode(this.data.moviecode).subscribe( res => {
          this.editData = res;
          this.updateMovieForm.setValue(
            {
              id: this.editData.id,
              name:this.editData.name,
              genre: this.editData.genre,
              releaseDate:this.editData.releaseDate,
              duration: this.editData.duration
            }
          )
        })

      }
  }
  
  updateMovie(){
    if(this.updateMovieForm.valid){
      this.newMovieservice.updateMovieByCode(this.updateMovieForm.value.id, this.updateMovieForm.value).subscribe( res => {
        // alert("Updated Movie Successfully");
        this.dialog.close();
      })
    }
    else{
      alert("Please fill all the fields")
    }
  }
}
