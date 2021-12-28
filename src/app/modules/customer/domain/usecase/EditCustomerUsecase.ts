import axios from "axios";
import { PersistUsecase } from "../../../shared/IUsecase";
import { Customer } from "../Customer";

export class EditCustomerUsecase implements PersistUsecase<Customer>{
    constructor(private readonly url: string){}

    async perform(customerData: Customer): Promise<Customer | null> {
        const response = await axios.put(this.url, {...customerData})
        const {statusCode, body} = await response.data
        
        if(statusCode === 200){
            const obj : Customer = {...body}
            return obj
        }
        else return null
    }

}