import { Router } from '@angular/router';
import { NewMovieService } from './../../services/new-movie.service';
import { Component, ViewChild, viewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';

@Component({
  selector: 'app-new-movie-list',
  templateUrl: './new-movie-list.component.html',
  styleUrl: './new-movie-list.component.css'
})
export class NewMovieListComponent {

  constructor(private service : NewMovieService, private dialog:MatDialog, private router : Router) {
    this.loadMovies();
  }

  movieList:any ;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !:MatPaginator

  loadMovies(){
    this.service.getNewMovies().subscribe( res => {
      this.movieList = res;
      this.dataSource = new MatTableDataSource(this.movieList)
      this.dataSource.paginator = this.paginator
    })
  }
  updateMovie(code:any){
   const popup = this.dialog.open(UpdateMovieComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data: {
        moviecode:code
      }
    });
    popup.afterClosed().subscribe( res => {
      this.loadMovies();
    })
    
  }

  opendialog(){

  }

  deleteMovie(code:any){
    this.service.deleteMovieByCode(code).subscribe( res => {
      alert('Movie delete Successfully')
      this.loadMovies();
    })
  }
  
  displayedColumns: string[] = ['id', 'name', 'genre', 'releaseDate','duration', 'action','remove'];

}
