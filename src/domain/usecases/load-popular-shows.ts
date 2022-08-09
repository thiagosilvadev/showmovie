import { ResultList } from '@/domain/helpers'
import { TvShow } from '@/domain/models'

export interface LoadPopularShows {
  load: (params: LoadPopularShows.Params) => Promise<LoadPopularShows.Result>
}

export namespace LoadPopularShows {
  export type Params = {
    page: number
  }
  export type Result = ResultList<LoadPopularShows.Model>
  export type Model = TvShow
}
