import { TMDBModel } from './TMDBModel'

export interface Movie {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export class TMDBMovie extends TMDBModel implements Movie {
  poster_path!: string
  adult!: boolean
  overview!: string
  release_date!: string
  genre_ids!: number[]
  id!: number
  original_title!: string
  original_language!: string
  title!: string
  backdrop_path!: string
  popularity!: number
  vote_count!: number
  video!: boolean
  vote_average!: number

  constructor(params: Movie) {
    super()
    Object.assign(this, params)
  }
}
