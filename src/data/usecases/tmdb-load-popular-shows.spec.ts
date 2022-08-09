import { HttpClientSpy } from '@/data/test/mock-http-client'
import { TMDBResponse } from './tmdb-load-popular-movies'

import { faker } from '@faker-js/faker'
import { LoadPopularShows } from '@/domain/usecases'
import { HttpStatusCode } from '../protocols/http/HttpClient'
import UnauthorizedError from '@/domain/errors/unauthorized-error'
import { UnexpectedError } from '@/domain/errors'
import { TMDBLoadPopularShows } from './tmdb-load-popular-shows'
import { TMDBTvShow } from '../models/TMDBTvShow'

const mockLoadPopularShowsParams = (): LoadPopularShows.Params => ({
  page: faker.datatype.number()
})

const mockLoadPopularShowsResult = (): TMDBResponse => {
  return {
    page: faker.datatype.number({
      min: 1,
      max: 20
    }),
    total_pages: faker.datatype.number({
      min: 1,
      max: 20
    }),
    total_results: faker.datatype.number({
      min: 1000
    }),
    results: Array.from({
      length: faker.datatype.number({ min: 2, max: 4 })
    }).map(() => ({
      id: faker.datatype.number(),
      title: faker.company.companyName(),
      poster_path: faker.image.imageUrl(),
      vote_average: faker.datatype.float()
    }))
  }
}

const makeSut = (url = faker.internet.url()) => {
  const httpClient = new HttpClientSpy()
  const sut = new TMDBLoadPopularShows(url, httpClient)

  return {
    httpClient,
    sut
  }
}

describe('TMDBLoadPopularShows', () => {
  test('should call the request method and pass the correct url, method and param to httpClient', async () => {
    const url = faker.internet.url()
    const { httpClient, sut } = makeSut(url)
    const params = mockLoadPopularShowsParams()
    httpClient.response = {
      statusCode: HttpStatusCode.ok,
      body: mockLoadPopularShowsResult()
    }
    sut.load(params)

    expect(httpClient.url).toBe(url)
    expect(httpClient.method).toBe('post')
    expect(httpClient.params).toEqual(params)
  })

  test('should return a ResultList if the statusCode is 200', async () => {
    const { httpClient, sut } = makeSut()
    const body = mockLoadPopularShowsResult()

    //inject the result on httpClient
    httpClient.response = {
      statusCode: HttpStatusCode.ok,
      body: body
    }

    const data = await sut.load(mockLoadPopularShowsParams())

    const transformedBody = {
      page: body.page,
      totalPages: body.total_pages,
      data: body.results.map(
        (show) =>
          new TMDBTvShow({
            id: show.id,
            rating: show.vote_average,
            title: show.title,
            poster: show.poster_path
          })
      )
    }
    // console.log(data)
    expect(data).toEqual(transformedBody)
  })
  test('should rejects the promise and throw UnauthorizedError if the request returns 401', () => {
    const { httpClient, sut } = makeSut()
    httpClient.response.statusCode = HttpStatusCode.unauthorized

    const promise = sut.load(mockLoadPopularShowsParams())

    expect(promise).rejects.toThrow(new UnauthorizedError())
  })
  test('should rejects the promise and throw UnexpectedError if the request return any statuscode thats not 200 or 401', () => {
    const { httpClient, sut } = makeSut()
    httpClient.response.statusCode = HttpStatusCode.badRequest

    const promise = sut.load(mockLoadPopularShowsParams())

    expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
