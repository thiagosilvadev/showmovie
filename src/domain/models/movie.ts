type PosterSizes =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original'

export interface Movie {
  id: number
  title: string
  poster?: string | null
  rating: number

  getPoster(size: PosterSizes): string | null
}
