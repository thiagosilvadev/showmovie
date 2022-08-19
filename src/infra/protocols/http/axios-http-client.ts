import { HttpClient, HttpRequest, HttpResponse } from './HttpClient'
import { Axios } from 'axios'

export class AxiosHttpClient implements HttpClient {
  private readonly axios: Axios
  constructor(
    private readonly baseUrl: string,
    private readonly defaultParams?: Record<string, unknown>
  ) {
    this.axios = new Axios({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  async request<R = any>({
    headers = { 'Content-Type': 'application/json' },
    ...data
  }: HttpRequest): Promise<HttpResponse<R>> {
    const response = await this.axios.request({
      url: data.url,
      method: data.method,
      params: {
        ...this.defaultParams,
        ...data.params
      },
      headers: headers
    })
    let body = response.data
    if (
      typeof response.data === 'string' &&
      headers['Content-Type'] === 'application/json'
    ) {
      body = JSON.parse(body)
    }
    return {
      statusCode: response.status,
      body
    }
  }
}
