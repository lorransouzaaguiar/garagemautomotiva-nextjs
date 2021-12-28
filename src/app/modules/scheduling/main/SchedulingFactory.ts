import { DeleteUsecaseImpl } from "../../shared/usecase/DeleteUsecaseImpl"
import { AddSchedulingUsecase } from "../domain/usecase/AddSchedulingUsecase"
import { EditSchedulingUsecase } from "../domain/usecase/EditSchedulingUsecase"
import { FindAllSchedulingUsecase } from "../domain/usecase/FindAllSchedulingsUsecase"

export class SchedulingFactory {
    private static url : string = 'http://localhost:3000/api/scheduling'

    static makeAddUsecase() : AddSchedulingUsecase{
        return new AddSchedulingUsecase(this.url)
    }

    static makeEditUsecase(): EditSchedulingUsecase {
        return new EditSchedulingUsecase(this.url)
    }

    static makeDeleteUsecase(): DeleteUsecaseImpl {
        return new DeleteUsecaseImpl(this.url)
    }

    static makeFindAllUsecase() : FindAllSchedulingUsecase{
        return new FindAllSchedulingUsecase(this.url) 
    }
}