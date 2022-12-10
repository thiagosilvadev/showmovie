import { HttpClient, HttpRequest, HttpResponse } from './HttpClient'

export class FetchHttpClient implements HttpClient {
  constructor(
    private readonly baseUrl: string,
    private readonly defaultParams?: Record<string, unknown>
  ) {}
  async request<R = any>({
    headers = { 'Content-Type': 'application/json' },
    method,
    body,
    ...data
  }: HttpRequest): Promise<HttpResponse<R>> {
    //@ts-ignore
    const params = new URLSearchParams({
      ...this.defaultParams,
      ...data.params
    }).toString()

    const url = `${this.baseUrl}/${data.url}?${params}`
    const response = await fetch(url, {
      headers,
      method,
      body: JSON.stringify(body)
    })

    const json = await response.json()

    return {
      statusCode: response.status,
      body: json
    }
  }
}
