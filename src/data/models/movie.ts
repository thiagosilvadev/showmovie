import { TMDBModel } from './TMDBModel'

interface MovieParams {
  poster_path: string
  id: number
  original_title: string
  original_language: string
  title: string
  popularity: number
  vote_count: number
  vote_average: number
}

export interface MovieDetailParams extends MovieParams {
  genres: {
    name: string
    id: number
  }[]
  overview: string
  backdrop_path: string
  release_date: Date
  tagline: string
  status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled'
}

export class Movie extends TMDBModel {
  constructor(params: MovieParams) {
    super()
    Object.assign(this, params)
  }
}

export class MovieDetail extends TMDBModel {
  constructor(params: MovieDetailParams) {
    super()
    Object.assign(this, {
      ...params,
      release_date: new Date(params.release_date)
    })
  }
}
