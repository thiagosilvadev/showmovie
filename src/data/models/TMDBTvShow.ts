import { TvShow } from '@/domain/models'
import { TMDBModel } from './TMDBModel'

export class TMDBTvShow extends TMDBModel implements TvShow {
  id: number
  title: string
  poster?: string | null
  rating: number
  constructor(params: TvShow) {
    super()
    this.id = params.id
    this.title = params.title
    this.poster = params.poster
    this.rating = params.rating
  }
}
