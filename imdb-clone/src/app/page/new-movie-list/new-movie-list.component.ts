import { Router } from '@angular/router';
import { NewMovieService } from './../../services/new-movie.service';
import { Component, ViewChild, viewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-movie-list',
  templateUrl: './new-movie-list.component.html',
  styleUrl: './new-movie-list.component.css'
})
export class NewMovieListComponent {
  movieList:any ;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !:MatPaginator

  displayedColumns: string[] = ['id', 'name', 'genre', 'releaseDate','duration', 'action','remove'];
  filterColumns: string[] = ['f-id', 'f-name', 'f-genre', 'f-releaseDate', 'f-duration', 'f-action', 'f-remove'];


  filterValues = {
    id:'',
    name: '',
    genre:'',
    releaseDate:'',
    duration: ''
  }

  constructor(private service : NewMovieService, private dialog:MatDialog, private router : Router) {
    this.loadMovies();
  }



  loadMovies(){
    this.service.getNewMovies().subscribe( res => {
      this.movieList = res;
      this.dataSource = new MatTableDataSource(this.movieList)
      this.dataSource.filterPredicate = this.customFilterPrediction();
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
      alert('Movie delete')
      this.loadMovies();
    })
  }
  
  filterChange(columnName: string, e: any) {
    const value = e.target.value.trim().toLowerCase();
    if (columnName in this.filterValues) {
      this.filterValues[columnName as keyof typeof this.filterValues] = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    }
  }

  customFilterPrediction(){
    const filterPrediction = (data:any,filterValue:string):boolean => {
      let searchstring = JSON.parse(filterValue);
      return data.id.toString().trim().toLowerCase().indexOf(searchstring.id.toLowerCase()) !== -1 &&
      data.name.toString().trim().toLowerCase().indexOf(searchstring.name.toLowerCase()) !== -1 &&
      data.genre.toString().trim().toLowerCase().indexOf(searchstring.genre.toLowerCase()) !== -1 &&
      data.releaseDate.toString().trim().toLowerCase().indexOf(searchstring.releaseDate.toLowerCase()) !== -1 &&
      data.duration.toString().trim().toLowerCase().indexOf(searchstring.duration.toLowerCase()) !== -1 ;
    }
    return filterPrediction;
  }

}
