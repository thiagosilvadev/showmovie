import { HttpClient } from 'data/protocols/http/HttpClient'
import AxiosHttpClient from 'infra/axios-http-client'

export function makeHttpClient(): HttpClient {
  const httpClient = new AxiosHttpClient(
    String(process.env.NEXT_PUBLIC_TMDB_URL),
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY
      }
    }
  )

  return httpClient
}
