import { Scheduling } from "../domain/Scheduling";

type SchedulingPresenter = {
    customerName: string,
    date: string,
    hour: string
}

export class SchedulingMapper {

    static toPresenter(schedulings: Scheduling[]): SchedulingPresenter[] {
        const schedulingsPresenter: SchedulingPresenter[] = []
        
        schedulings.map(sche => {
            let scheduling: SchedulingPresenter = {
                customerName: sche.customer.name,
                date: sche.date,
                hour: sche.hour
            }

            schedulingsPresenter.push(scheduling)
        })

        return schedulingsPresenter
        
    }
}