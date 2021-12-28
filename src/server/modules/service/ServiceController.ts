import validator from "validator";
import { HttpRequest, HttpResponse } from "../shared/HttpDTO";
import { badRequest, ok, serverError } from "../shared/HttpHelper";
import { isEmptyOrIsNotUUID } from "../shared/UuidValidator";
import { Service } from "./Service";
import { ServiceDAO } from "./ServiceDAO";

export class ServiceController {

    constructor(private readonly dao: ServiceDAO) { }

    async getAll(): Promise<HttpResponse> {
        const services = await this.dao.getAll()

        if (services.length != 0) return ok(services)
        else return serverError()
    }

    async insert(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest
        
        try {
            if (body) {
                const serv = new Service(body.id, body.description, body.price)
                const isValidOrHasErrors = serv.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.insert(serv)

                    if (result) return ok(serv)
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
                const serv = new Service(body.id, body.description, body.price)
                const isValidOrHasErrors = serv.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.update(serv)

                    if (result) return ok(serv)
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
        const isInvalidId = isEmptyOrIsNotUUID(params.id)

        try {
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