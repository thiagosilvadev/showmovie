import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from 'data/protocols/http/HttpClient'

export default class AxiosHttpClient implements HttpClient {
  readonly client: Axios
  constructor(
    private readonly baseURL: string,
    private readonly defaultRequestConfig?: AxiosRequestConfig
  ) {
    this.client = axios.create({
      baseURL: this.baseURL
    })
    this.client.interceptors.request.use((config) => {
      config = {
        ...config,
        ...this.defaultRequestConfig
      }
      return config
    })
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await this.client.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params
      })
    } catch (error) {
      //@ts-ignore
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
