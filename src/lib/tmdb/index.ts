import { AxiosHttpClient } from '@/infra/protocols/http/axios-http-client'
import { FetchHttpClient } from '@/infra/protocols/http/fetch-http-client'
import TMDBClient from './tmdb-client'

export default function tmdb() {
  const httpClient = new FetchHttpClient(
    String(process.env.NEXT_PUBLIC_TMDB_URL),
    {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'pt-BR'
    }
  )
  return new TMDBClient(httpClient)
}
