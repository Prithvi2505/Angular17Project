
export type Movie = {
    id:  number,
    backdrop_path: string,
    genre_ids:number[],
    original_language: string,
    original_title:string,
    overview:string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title:string,
    vote_average: number,
    vote_count: number,
    revenue ?: number,
    runtime ?: number,
    status ?: string,
    genres ? : Genres[],
}
export type MovieDto = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results:number
}

export type Genres = {
    id: string,
    name: string,
}
export type GenresDto = {
    genres : Genres[], 
}

export type newMovie = {
    id : string,
    name: string,
    genre: string,
    releaseDate : string,
    duration : number,
}