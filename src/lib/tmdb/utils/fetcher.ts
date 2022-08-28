import { UnauthorizedError, UnexpectedError } from '@/errors'
import { HttpResponse, HttpStatusCode } from '@/infra/protocols/http/HttpClient'

export abstract class Fetcher {
  protected handleResponse<T = any, R = any>(
    response: HttpResponse<T>,
    responseMapper: (body: HttpResponse<T>['body']) => R
  ): R {
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return responseMapper(response.body!)
        break
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError()
      default:
        throw new UnexpectedError()
        break
    }
  }
}
