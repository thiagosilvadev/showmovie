export type LoadPopularMoviesResult<T = any> = {
  page: number
  results: T[]
  total_results: number
  total_pages: number
}
export interface LoadPopularMovies {
  load(page: number): Promise<LoadPopularMoviesResult>
}

export interface LoadMovieDetails<T = any> {
  load(id: number): Promise<T>
}
