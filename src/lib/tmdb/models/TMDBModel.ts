type PosterSizes =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original'

export abstract class TMDBModel {
  poster_path?: string | null
  constructor(
    private readonly baseImageUrl: string = 'http://image.tmdb.org/t/p/'
  ) {}

  getPoster(size: PosterSizes) {
    if (this.poster_path)
      return `${this.baseImageUrl}${size}${this.poster_path}`
    else return null
  }
}
