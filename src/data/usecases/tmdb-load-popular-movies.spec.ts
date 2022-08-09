import { HttpClientSpy } from '@/data/test/mock-http-client'
import { TMDBLoadPopularMovies } from './tmdb-load-popular-movies'

import { faker } from '@faker-js/faker'
import { LoadPopularMovies } from '@/domain/usecases'
import { Movie } from '@/domain/models'
import { HttpStatusCode } from '../protocols/http/HttpClient'
import UnauthorizedError from '@/domain/errors/unauthorized-error'
import { UnexpectedError } from '@/domain/errors'

const mockLoadPopularMoviesParams = (): LoadPopularMovies.Params => ({
  page: faker.datatype.number()
})

const mockLoadPopularMoviesResult = (): LoadPopularMovies.Result => {
  const data: Movie[] = Array.from({
    length: faker.datatype.number({ min: 2, max: 4 })
  }).map(() => ({
    id: faker.datatype.number(),
    title: faker.company.companyName(),
    poster: faker.image.imageUrl(),
    rating: faker.datatype.float()
  }))

  return {
    page: faker.datatype.number(),
    totalPages: faker.datatype.number({
      min: 1,
      max: 20
    }),
    data
  }
}

const makeSut = (url = faker.internet.url()) => {
  const httpClient = new HttpClientSpy<LoadPopularMovies.Result>()
  const sut = new TMDBLoadPopularMovies(url, httpClient)

  return {
    httpClient,
    sut
  }
}

describe('TMDBLoadPopularMovies', () => {
  test('should call the request method and pass the correct url, method and param to httpClient', async () => {
    const url = faker.internet.url()
    const { httpClient, sut } = makeSut(url)
    const params = mockLoadPopularMoviesParams()
    sut.load(params)

    expect(httpClient.url).toBe(url)
    expect(httpClient.method).toBe('post')
    expect(httpClient.params).toEqual(params)
  })

  test('should return a ResultList if the statusCode is 200', async () => {
    const { httpClient, sut } = makeSut()
    const body = mockLoadPopularMoviesResult()
    //inject the result on httpClient
    httpClient.response = {
      statusCode: HttpStatusCode.ok,
      body
    }
    const data = await sut.load(mockLoadPopularMoviesParams())

    expect(data).toEqual(body)
  })
  test('should rejects the promise and throw UnauthorizedError if the request returns 401', () => {
    const { httpClient, sut } = makeSut()
    httpClient.response.statusCode = HttpStatusCode.unauthorized

    const promise = sut.load(mockLoadPopularMoviesParams())

    expect(promise).rejects.toThrow(new UnauthorizedError())
  })
  test('should rejects the promise and throw UnexpectedError if the request return any statuscode thats not 200 or 401', () => {
    const { httpClient, sut } = makeSut()
    httpClient.response.statusCode = HttpStatusCode.unauthorized

    const promise = sut.load(mockLoadPopularMoviesParams())

    expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
