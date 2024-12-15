import { HttpResponse } from '.' // o "." faz referencia a pasta

export type HttpPostParams<B> = {
    url: string
    body?: B
}

export interface HttpPostClient<B, R> {
    post (params: HttpPostParams<B>): Promise<HttpResponse<R>>
}
