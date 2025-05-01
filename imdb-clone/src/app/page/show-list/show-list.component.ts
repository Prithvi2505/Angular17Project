import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie, MovieDto } from '../../type/movie';
import { MoviesService } from '../../services/movies.service';
import { PaginatorState } from 'primeng/paginator';
import { TvShowService } from '../../services/tv-show.service';
import { mapToMovies, mapToMoviesDto } from '../../type/tvshow';

import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent implements OnInit {

  showList$ !: Observable<MovieDto>
  searchValue ='';
  showtype: 'movie' | 'tv' = 'movie';

  constructor(private router: ActivatedRoute, private movieService : MoviesService, private tvShowService:TvShowService) {}

  ngOnInit() {
    this.showtype = this.router.snapshot.params['type'];
    this.getSearchPage(this.showtype,1)
  }

  getSearchPage(showsType: 'movie' | 'tv', page:number, value?:string){
    if(showsType === 'movie'){
    this.showList$ = this.movieService.SearchMovies(page, value);
    }
    if(showsType === 'tv') {
      this.showList$ = this.tvShowService.searchTvShows(page,value).pipe(map(mapToMoviesDto))
    }
  }

  searchChanged(){
    this.getSearchPage(this.showtype,1,this.searchValue)
  }
  pageChange(event:PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
      this.getSearchPage(this.showtype,pageNumber, this.searchValue)

  }

}
