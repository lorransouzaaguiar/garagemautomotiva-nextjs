import { HttpResponse } from "./HttpDTO";

export const badRequest = (error: string | string[]): HttpResponse =>
({
    statusCode: 400,
    body: error
})

export const serverError = () =>
({

    statusCode: 500,
    body: 'server error'
})

export const ok = (data: any) => 
({

    statusCode: 200,
    body: data
})
