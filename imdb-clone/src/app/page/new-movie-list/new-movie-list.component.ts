import { Component, ViewChild, viewChild } from '@angular/core';
import { NewMovieService } from '../../services/new-movie.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-new-movie-list',
  templateUrl: './new-movie-list.component.html',
  styleUrl: './new-movie-list.component.css'
})
export class NewMovieListComponent {

  constructor(private service : NewMovieService) {
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

  }
  
  displayedColumns: string[] = ['id', 'name', 'genre', 'releaseDate','duration', 'action'];

}
