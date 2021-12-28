import { CustomerController } from "./CustomerController";
import { CustomerDAOImpl } from "./CustomerDAOImpl";

export class CustomerFactory {

    static makeController(): CustomerController {
        const dao = new CustomerDAOImpl();
        return new CustomerController(dao);
    }

} 