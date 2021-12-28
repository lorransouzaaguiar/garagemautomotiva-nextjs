import { useContext, useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { AppContext } from "../../../components/StoreProvider"
import { Customer } from "../domain/Customer"
import { CustomerFactory } from "../main/CustomerFactory"

export default function CustomerManage() {
    const {state, dispatch} = useContext(AppContext)
    const findAllCustomerUsecase = CustomerFactory.makeFindAllUsecase()
    
    useEffect(() => {
        (async () => {
            const customers = await findAllCustomerUsecase.perform()
            dispatch({type: 'FIND_ALL_CUSTOMERS', payload: customers})
            
        })()
    }, [dispatch])

    console.log(state.customers)

    return (
        <Manage<Customer> headerInfo={{
                title: 'Clientes',
                subTitle : 'Gerencie seus clientes',
                inputPlaceholder: 'Digite o nome do cliente'
            }}
            tableInfo={{
                nameColumns: ['nome', 'celular', 'email', 'cpf'],
                data : state.customers
            }}/>
    )
}