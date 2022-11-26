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

export class TMDBMovieDetail extends TMDBModel implements MovieDetail {
  adult = false
  backdrop_path!: string
  belongs_to_collection: any
  budget!: number
  genres: Genre[] = []
  homepage!: string
  id!: number
  imdb_id!: string
  original_language!: string
  original_title!: string
  overview!: string
  popularity!: number
  production_companies: ProductionCompany[] = []
  production_countries: ProductionCountry[] = []
  release_date!: string
  revenue!: number
  runtime!: number
  spoken_languages: SpokenLanguage[] = []
  status!: string
  tagline!: string
  title!: string
  video = false
  vote_average!: number
  vote_count!: number
  constructor(params: MovieDetail) {
    super()
    Object.assign(this, params)
  }
}

export interface MovieDetail {
  adult: boolean
  backdrop_path?: string | null
  belongs_to_collection: any
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string | null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path?: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  iso_639_1: string
  name: string
}

export interface TMDBCredits {
  id: number
  cast: Cast[]
  crew: Crew[]
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface Crew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  credit_id: string
  department: string
  job: string
}

export interface TMDBSeasons {
  _id: string
  air_date: string
  episodes: Episode[]
  name: string
  overview: string
  id: number
  poster_path: string
  season_number: number
}

export interface Episode {
  air_date: string
  episode_number: number
  crew: Crew[]
  guest_stars: GuestStar[]
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface GuestStar {
  credit_id: string
  order: number
  character: string
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
}
