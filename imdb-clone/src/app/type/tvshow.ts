import { map } from 'rxjs';
import { Movie } from './movie';
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

export function mapToMovie(tvshow: Tvshow[]) : Movie[] {
    return tvshow.map((tvshow:Tvshow) => {
        return {
            ...tvshow,
            title: tvshow.name,
            original_title: tvshow.original_name
        }
    })
}