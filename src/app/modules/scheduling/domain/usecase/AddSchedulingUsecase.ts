import axios from "axios";
import { PersistUsecase } from "../../../shared/IUsecase";
import { Scheduling } from "../Scheduling";

export class AddSchedulingUsecase implements PersistUsecase<Scheduling>{
    constructor(private readonly url: string){}
    
    async perform(data: Scheduling): Promise<Scheduling | null> {
        const response = await axios.post(this.url, {...data})
        const {statusCode, body} = await response.data
        
        if(statusCode === 200){
            const obj : Scheduling = {...body}
            return obj
        }
        else return null
    }
    
}