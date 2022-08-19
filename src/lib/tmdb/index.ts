import { AxiosHttpClient } from '@/infra/protocols/http/axios-http-client'
import TMDBClient from './tmdb-client'

export default function tmdb() {
  const httpClient = new AxiosHttpClient(
    String(process.env.NEXT_PUBLIC_TMDB_URL),
    {
      api_key: process.env.NEXT_PUBLIC_API_KEY
    }
  )
  return new TMDBClient(httpClient)
}