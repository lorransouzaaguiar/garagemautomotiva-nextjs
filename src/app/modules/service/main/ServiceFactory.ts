import { DeleteUsecaseImpl } from "../../shared/usecase/DeleteUsecaseImpl"
import { AddServiceUsecase } from "../domain/usecase/AddServiceUsecase"
import { EditServiceUsecase } from "../domain/usecase/EditServiceUsecase"
import { FindAllServicesUseCase } from "../domain/usecase/FindAllServicesUsecase"

export class ServiceFactory {
    private static url: string = 'http://localhost:3100/api/service'

    static addUsecase() : AddServiceUsecase{
        return new AddServiceUsecase(this.url)
    }

    static editUsecase(): EditServiceUsecase {
        return new EditServiceUsecase(this.url)
    }

    static deleteUsecase(): DeleteUsecaseImpl {
        return new DeleteUsecaseImpl(this.url)
    }

    static findAllUsecase() : FindAllServicesUseCase{
        return new FindAllServicesUseCase(this.url) 
    }

}