import { mockPostRequest } from '@/data/test'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { mockAxios } from '@/infra/test'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
    sut: AxiosHttpClient
    mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
    const sut = new AxiosHttpClient()
    const mockedAxios = mockAxios()

    return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
    test('should call axios with correct values', async () => {
        const request = mockPostRequest()
        const { sut, mockedAxios } = makeSut()
        await sut.post(request)
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test('should return the correct statusCode and body', () => {
        const { sut, mockedAxios } = makeSut()
        const promise = sut.post(mockPostRequest())
        expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
})
