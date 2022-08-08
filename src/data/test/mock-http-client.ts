import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/HttpClient'

export class HttpClientSpy<R = any> implements HttpClient {
  url?: string
  method?: string
  body?: any
  headers?: any
  params?: Record<string, unknown> | undefined
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  request(data: HttpRequest): Promise<HttpResponse<R>> {
    Object.assign(this, data)
    return Promise.resolve(this.response)
  }
}
