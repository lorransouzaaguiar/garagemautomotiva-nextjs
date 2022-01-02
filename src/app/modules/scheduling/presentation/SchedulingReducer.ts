import { Action, InitialState } from "../../shared/store/StoreProvider";

const schedulingType = {
    findAll: 'FIND_ALL'
}

const schedulingReducer = (state: InitialState, action: Action) : InitialState => {
    switch(action.type) {
        case schedulingType.findAll: {
            return {
                ...state,
                schedulings: action.payload
            }
        } 
        default: 
            return state
    }

}

export {schedulingReducer, schedulingType}