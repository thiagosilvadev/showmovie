type PosterSizes =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original'

type BackdropSizes = 'w300' | 'w780' | 'w1280' | 'original'

export abstract class TMDBModel {
  poster_path?: string | null
  backdrop_path?: string | null
  constructor(
    private readonly baseImageUrl: string = 'http://image.tmdb.org/t/p/'
  ) {}

  getPoster(size: PosterSizes) {
    if (this.poster_path)
      return `${this.baseImageUrl}${size}${this.poster_path}`
    else return null
  }
  getBackdrop(size: BackdropSizes) {
    if (this.backdrop_path)
      return `${this.baseImageUrl}${size}${this.backdrop_path}`
    else return null
  }
}
