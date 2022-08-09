import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from '@/data/protocols/http/HttpClient'
import { Axios } from 'axios'

export class AxiosHttpClient implements HttpClient {
  private readonly axios: Axios
  constructor(
    private readonly baseUrl: string,
    private readonly defaultParams: Record<string, unknown>
  ) {
    this.axios = new Axios({
      baseURL: this.baseUrl
    })
  }
  async request<R = any>(data: HttpRequest): Promise<HttpResponse<R>> {
    const response = await this.axios.request<R>({
      method: data.method,
      params: {
        ...this.defaultParams,
        ...data.params
      },
      headers: data.headers
    })

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
