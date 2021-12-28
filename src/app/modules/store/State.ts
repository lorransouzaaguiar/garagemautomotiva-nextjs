import { Customer } from "../customer/domain/Customer"
import { Scheduling } from "../scheduling/domain/Scheduling"
import { Service } from "../service/domain/Service"

export type InitialState = {
    customers: Customer[],
    schedulings: Scheduling[],
    services: Service[]
}

export const initialstate : InitialState = {
    customers: [],
    schedulings: [],
    services: []
}