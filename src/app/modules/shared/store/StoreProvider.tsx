import React, { createContext, useContext, useReducer, } from "react"
import { Customer } from "../../customer/domain/Customer"
import { Scheduling } from "../../scheduling/domain/Scheduling"
import { Service } from "../../service/domain/Service"
import { storeReducer } from "./StoreReducer"

type AppContextType = [
    state: InitialState ,
    dispatch: React.Dispatch<Action> 
]

export type Action = {
    contextType: string,
    type: string,
    payload: any
}

export type InitialState = {
    customers: Customer[],
    schedulings: Scheduling[],
    services: Service[]
}

const initialstate : InitialState = {
    customers: [],
    schedulings: [],
    services: []
}

const AppContext = createContext<AppContextType>({} as AppContextType)

const StoreProvider = ({...props}) =>
    <AppContext.Provider value={useReducer(storeReducer, initialstate)}>
        {props.children}
    </AppContext.Provider>

const useStore = () => useContext(AppContext)[0]
const useDispatch = () => useContext(AppContext)[1]

export {useStore, useDispatch}
export default StoreProvider


