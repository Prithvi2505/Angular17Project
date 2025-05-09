import { map } from 'rxjs';
import { Movie, MovieDto } from './movie';
export type Tvshow = {
    id:  number,
    backdrop_path: string,
    genre_ids:number[],
    original_language: string,
    original_name:string,
    overview:string,
    popularity: number,
    poster_path: string,
    release_date: string,
    name:string,
    vote_average: number,
    vote_count: number,
    first_air_date: string
}
export type tvshowDto = {
    page: number,
    results: Tvshow[],
    total_pages: number,
    total_results:number
}

export function mapToMovies(tvshow: Tvshow[]) : Movie[] {
    return tvshow.map((tvshow:Tvshow) => {
        return {
            ...tvshow,
            title: tvshow.name,
            original_title: tvshow.original_name
        }
    })
}

export function mapToMovie(tvshow: Tvshow): Movie {
  return {
    ...tvshow,
    title: tvshow.name,
    original_title: tvshow.original_name,
  };
}

export function mapToMoviesDto(tvshowDto: tvshowDto): MovieDto {
  return {
    results: tvshowDto.results.map(mapToMovie),
    total_pages: tvshowDto.total_pages,
    total_results: tvshowDto.total_results,
    page: tvshowDto.page,
  };
}