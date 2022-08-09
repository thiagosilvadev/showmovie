import { Movie } from '@/domain/models'
import { TMDBModel } from './TMDBModel'

export class TMDBMovie extends TMDBModel implements Movie {
  id: number
  title: string
  poster?: string | null
  rating: number
  constructor(params: Movie) {
    super()
    this.id = params.id
    this.title = params.title
    this.poster = params.poster
    this.rating = params.rating
  }
}
