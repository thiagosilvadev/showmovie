import { ResultList } from '@/domain/helpers'
import { Movie } from '@/domain/models'

export interface LoadPopularMovies {
  load: (params: LoadPopularMovies.Params) => Promise<LoadPopularMovies.Result>
}

export namespace LoadPopularMovies {
  export type Params = {
    page: number
  }
  export type Result = ResultList<LoadPopularMovies.Model>
  export type Model = Movie
}
