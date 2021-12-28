import axios from "axios"
import { FindAllUsecase } from "../../../shared/IUsecase"
import { Customer } from "../Customer"

export class FindAllCustomerUsecase implements FindAllUsecase<Customer>{
    constructor(private readonly url: string){}

    async perform(): Promise<Customer[]> {
        const customers: Customer[] = []
        const response = await axios.get(this.url)
        const {statusCode, body} : any = response.data
    
        if(statusCode === 200){
           for (const object of body) {
               const customer : Customer = {...object}
               customers.push(customer)
           }
            return customers
        }
        
        return customers
    }
}