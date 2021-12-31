import { DeleteUsecaseImpl } from "../../shared/usecase/DeleteUsecaseImpl"
import { AddCustomerUsecase } from "../domain/usecase/AddCustomerUsecase"
import { EditCustomerUsecase } from "../domain/usecase/EditCustomerUsecase"
import { FindAllCustomerUsecase } from "../domain/usecase/FindAllCustomerUsecase"

export class CustomerFactory {
    private static url: string = 'http://localhost:3000/api/customer'

    static addUsecase() : AddCustomerUsecase{
        return new AddCustomerUsecase(this.url)
    }

    static editUsecase(): EditCustomerUsecase {
        return new EditCustomerUsecase(this.url)
    }

    static deleteUsecase(): DeleteUsecaseImpl {
        return new DeleteUsecaseImpl(this.url)
    }

    static findAllUsecase() : FindAllCustomerUsecase{
        return new FindAllCustomerUsecase(this.url) 
    }
}
