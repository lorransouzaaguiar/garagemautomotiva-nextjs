import {badRequest, ok, serverError} from "../shared/HttpHelper";
import {HttpRequest, HttpResponse} from "../shared/HttpDTO";
import { ProductDAO } from "./ProductDAO";
import { Product } from "./Product";
import { isEmptyOrIsNotUUID } from "../shared/UuidValidator";

export class ProductController {

    constructor(private readonly dao: ProductDAO) {}

    async getAll(): Promise<HttpResponse> {
        const products = await this.dao.getAll()

        if (products.length != 0) return ok([...products])
        else return serverError()
    }

    async insert(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest
      
        try {
            if (body) {
                const product = new Product(body.id, body.description, body.price, body.qtyStock)
                const isValidOrHasErrors = product.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.insert(product)

                    if (result) return ok(product)
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
                const product = new Product(body.id, body.description, body.price, body.qtyStock)
                const isValidOrHasErrors = product.isValid()

                if (isValidOrHasErrors == true) {
                    const result = await this.dao.update(product)

                    if (result) return ok(product)
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