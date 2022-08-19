import { HttpClient } from '@/infra/protocols/http/HttpClient'
import { MovieClient } from './movies/movie-client'
import { TvShowClient } from './tv-shows/tv-show-client'

export default class TMDBClient {
  constructor(private readonly httpClient: HttpClient) {}
  get tvshows() {
    return new TvShowClient(this.httpClient)
  }
  get movies() {
    return new MovieClient(this.httpClient)
  }
}
