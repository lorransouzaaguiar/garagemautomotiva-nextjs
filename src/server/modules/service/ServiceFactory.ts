import { ServiceController } from "./ServiceController";
import { ServiceDAOImpl } from "./ServiceDAOImpl";

export class ServiceFactory {

    static makeController(): ServiceController{
        const dao = new ServiceDAOImpl()
        return new ServiceController(dao)
    }

}