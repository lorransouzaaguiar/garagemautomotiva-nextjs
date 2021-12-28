import { InitialState } from "../State"

export type Action = {
    type: string,
    payload: any
}

export function CustomerReducer (state: InitialState, action: Action) : InitialState{
    switch (action.type) {
        case 'FIND_ALL_CUSTOMERS': {
            return {
                ...state,
                customers: action.payload,
            }
        }
        default: 
            return state
    }
}