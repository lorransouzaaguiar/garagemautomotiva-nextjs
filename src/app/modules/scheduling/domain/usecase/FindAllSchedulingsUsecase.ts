import axios from "axios";
import { FindAllUsecase } from "../../../shared/IUsecase";
import { Scheduling } from "../Scheduling";

export class FindAllSchedulingUsecase implements FindAllUsecase<Scheduling> {
    constructor(private readonly url: string){}
    
    async perform(): Promise<Scheduling[]> {
        const schedulings : Scheduling [] = []
        const response = await axios.get(this.url)
        const {statusCode, body}: any = response.data
        
        if(statusCode === 200){
            for (const object of body) {
                const scheduling : Scheduling = {...object}
                schedulings.push(scheduling)
            }
        }
        return schedulings
    }



}