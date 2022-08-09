type PosterSizes =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original'

export abstract class TMDBModel {
  poster?: string | null
  constructor(
    private readonly baseImageUrl: string = 'http://image.tmdb.org/t/p/'
  ) {}

  getPoster(size: PosterSizes) {
    if (this.poster) return `${this.baseImageUrl}${size}${this.poster}`
    else return null
  }
}
