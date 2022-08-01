type PosterPathSize =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original'
type BackdropPathSize = 'w300' | 'w780' | 'w1280' | 'original'

export abstract class TMDBModel {
  private readonly backdrop_path?: string
  private readonly poster_path?: string
  private readonly baseUrl: string = 'http://image.tmdb.org/t/p/'

  posterPath(size: PosterPathSize): string {
    return `${this.baseUrl}${size}${this.poster_path}`
  }

  backdropPath(size: BackdropPathSize): string {
    return `${this.baseUrl}${size}${this.backdrop_path}`
  }
}
