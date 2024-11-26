import { AccountModel } from '../models/account-model'

type AuthenicationParams = {
  email: string
  password: string
}

export interface Authenication {
  auth (params: AuthenicationParams): Promise<AccountModel>
}
