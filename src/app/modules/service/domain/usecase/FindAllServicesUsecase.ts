import axios from "axios";
import { FindAllUsecase } from "../../../shared/IUsecase";
import { Service } from "../Service";

export class FindAllServicesUseCase implements FindAllUsecase<Service> {
    constructor(private readonly url: string){}

    async perform(): Promise<Service[]> {
        const services: Service[] = []
        const response = await axios.get(this.url)
        const {statusCode, body} : any = response.data
        
        if(statusCode === 200) {
            for (const object of body) {
                const service: Service = {...object}
                services.push(service)
            }

            return services
        }

        return services
    }

}