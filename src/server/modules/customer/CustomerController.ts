import { badRequest, ok, serverError } from "~/server/modules/shared/HttpHelper";
import { HttpRequest, HttpResponse } from "~/server/modules/shared/HttpDTO";
import { CustomerDAO } from "./CustomerDAO";
import { Customer } from "./Customer";
import { isEmptyOrIsNotUUID } from "../shared/UuidValidator";

export class CustomerController {

    constructor(private readonly dao: CustomerDAO) { }

    async getAll(): Promise<HttpResponse> {
        const customers = await this.dao.getAll()

        if (customers.length != 0) return ok([...customers])
        else return serverError()
    }

    async insert(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest
        console.log(body)
        try {
            if (body) {
                const cus = new Customer(body.id, body.name, body.number, body.email, body?.CPF)
                const isValidOrHasErrors = cus.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.insert(cus)

                    if (result) return ok(cus)
                    else return serverError()
                }

                else return badRequest(isValidOrHasErrors)
            }

            else return badRequest('data are required in the request body')

        } catch (error) {
            return serverError()
        }

    }

    async update(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest

        try {
            if (body) {
                const cus = new Customer(body.id, body.name, body.number, body.email, body?.CPF)
                const isValidOrHasErrors = cus.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.update(cus)

                    if (result) return ok(cus)
                    else return serverError()
                }

                else return badRequest(isValidOrHasErrors)
            }

            else return badRequest('data are required in the request body')

        } catch (error) {
            return serverError()
        }

    }

    async delete(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { params } = httpRequest

        try {
            const isInvalidId = isEmptyOrIsNotUUID(params.id)

            if (isInvalidId)
                return badRequest(isInvalidId)

            const result = await this.dao.delete(params.id)

            if (result) return ok({ id: result })

            else return serverError()

        } catch (error) {
            return serverError()
        }
    }
}