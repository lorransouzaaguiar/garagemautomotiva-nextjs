import axios from "axios"

export class DeleteUsecaseImpl implements DeleteUsecaseImpl {
    constructor(private readonly url: string){}
    
    async perform(id: number): Promise<number> {
        const response = await axios.delete(`${this.url}/${id}`)
        const {statusCode, body} = await response.data
        
        if(statusCode === 200){
            const reposnseId : number = body.id
            return reposnseId
        }
        else return -1
    }

}