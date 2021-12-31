import { Action, InitialState } from "~/app/modules/shared/store/StoreProvider"

const customerType = {
    findAll: 'FIND_ALL'
}

const customerReducer = (state: InitialState, action: Action) : InitialState => {
    switch (action.type) {
        case customerType.findAll: {
            return {
                ...state,
                customers: action.payload,
            }
        }
        default: 
            return state
    }
}

export {customerReducer, customerType}