import { AuthenticationParams } from '@/domain/usecases/authentication'
import { AccountModel } from '@/domain/models'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
    accessToken: faker.random.uuid()
})
