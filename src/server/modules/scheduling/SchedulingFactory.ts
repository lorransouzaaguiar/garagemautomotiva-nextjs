import { SchedulingController } from "./SchedulingController";
import { SchedulingDAOImpl } from "./SchedulingDAOImpl";

export class SchedulingFactory {

    static makeController(): SchedulingController{
        const dao = new SchedulingDAOImpl()
        return new SchedulingController(dao)
    }
}