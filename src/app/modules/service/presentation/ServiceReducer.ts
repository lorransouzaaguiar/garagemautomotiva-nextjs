import { Action, InitialState } from "../../shared/store/StoreProvider"

const serviceType = {
    findAll : 'FIND_ALL'
}

const serviceReducer = (state: InitialState, action: Action): InitialState => {
    switch(action.type){
        case serviceType.findAll : 
            return {
                ...state,
                services: action.payload
            }
        break;
        default: 
            return state
    }
}

export {serviceReducer, serviceType}