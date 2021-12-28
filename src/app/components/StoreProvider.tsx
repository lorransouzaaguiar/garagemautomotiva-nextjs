import React, { createContext, useReducer, } from "react"
import { Action, CustomerReducer } from "../modules/store/reducers/CustomerReducer"
import { InitialState, initialstate } from "../modules/store/State"

type AppContextType = {
    state: InitialState ,
    dispatch: React.Dispatch<Action> 
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export default function StoreProvider({...props}){
   
    const [state, dispatch] = useReducer(CustomerReducer, initialstate)

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}



