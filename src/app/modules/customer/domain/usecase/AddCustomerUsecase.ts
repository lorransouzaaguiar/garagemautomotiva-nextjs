import axios from "axios";
import { Customer } from "../Customer";
import {PersistUsecase} from "../../../shared/IUsecase";

export class AddCustomerUsecase implements PersistUsecase<Customer>{
    constructor(private readonly url: string){}
    
    async perform(data: Customer): Promise<Customer | null> {
        const response = await axios.post(this.url, {...data})
        const {statusCode, body} = await response.data
        
        if(statusCode === 200){
            const obj : Customer = {...body}
            return obj
        }
        else return null
    }
    
}