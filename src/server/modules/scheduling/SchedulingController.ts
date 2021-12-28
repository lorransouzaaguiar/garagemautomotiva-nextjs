import { HttpRequest, HttpResponse } from "../shared/HttpDTO";
import { badRequest, ok, serverError } from "../shared/HttpHelper";
import { isEmptyOrIsNotUUID } from "../shared/UuidValidator";
import { Scheduling } from "./Scheduling";
import { SchedulingDAO } from "./SchedulingDAO";
import { SchedulingItem } from "./DTOs/SchedulingItem";


export class SchedulingController {

    constructor(private readonly dao: SchedulingDAO) { }

    async getAll(): Promise<HttpResponse> {
        const schedulings = await this.dao.findAll()
        if(schedulings.length != 0)
            return ok(schedulings)
        
        return serverError()
    }

    async insert(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest

        try {
            if (body) {
                const sche = new Scheduling(body.id, body.customerId, body.date, body.hour)
                const isValidOrHasErrors = sche.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.insert(sche)

                    if (result) return ok(sche)
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
                const sche = new Scheduling(body.id, body.customerId, body.date, body.hour)
                const isValidOrHasErrors = sche.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.update(sche)

                    if (result) return ok(sche)
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
        const { body } = httpRequest
        const isInvalidId = isEmptyOrIsNotUUID(body.id)

        try {
            if (isInvalidId)
                return badRequest(isInvalidId)

            const result = await this.dao.delete(body.id)

            if (result) return ok({ id: result })

            else return serverError()

        } catch (error) {
            return serverError()
        }
    }
}