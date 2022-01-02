import { DeleteUsecaseImpl } from "../../shared/usecase/DeleteUsecaseImpl"
import { AddSchedulingUsecase } from "../domain/usecase/AddSchedulingUsecase"
import { EditSchedulingUsecase } from "../domain/usecase/EditSchedulingUsecase"
import { FindAllSchedulingUsecase } from "../domain/usecase/FindAllSchedulingsUsecase"

export class SchedulingFactory {
    private static url : string = 'http://localhost:3000/api/scheduling'

    static addUsecase() : AddSchedulingUsecase{
        return new AddSchedulingUsecase(this.url)
    }

    static editUsecase(): EditSchedulingUsecase {
        return new EditSchedulingUsecase(this.url)
    }

    static deleteUsecase(): DeleteUsecaseImpl {
        return new DeleteUsecaseImpl(this.url)
    }

    static findAllUsecase() : FindAllSchedulingUsecase{
        return new FindAllSchedulingUsecase(this.url) 
    }
}