import { customerReducer } from "../../customer/presentation/reducer/CustomerReducer"
import { schedulingReducer } from "../../scheduling/presentation/SchedulingReducer"
import { serviceReducer } from "../../service/presentation/ServiceReducer"
import { Action, InitialState } from "./StoreProvider"

export const contextType = {
    customer: 'CUSTOMER',
    scheduling: 'SCHEDULING',
    service: 'SERVICE'
}

export function storeReducer (state: InitialState, action: Action) : InitialState {
    switch (action.contextType) {
        case contextType.customer: 
            return customerReducer(state, action)
        break;
        case contextType.scheduling: 
            return schedulingReducer(state, action)
        break;
        case contextType.service: 
            return serviceReducer(state, action)
        default: 
            return state
    }
}

