import axios from "axios"
import { PersistUsecase } from "../../../shared/IUsecase"
import { Service } from "../Service"


export class AddServiceUsecase implements PersistUsecase<Service>{
    constructor(private readonly url: string){}
    
    async perform(data: Service): Promise<Service | null> {
        const response = await axios.post(this.url, {...data})
        const {statusCode, body} = await response.data
        
        if(statusCode === 200){
            const cus : Service = {...body}
            return cus
        }
        else return null
    }
    
}