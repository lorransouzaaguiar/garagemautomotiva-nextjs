import { useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { useDispatch, useStore } from "../../shared/store/StoreProvider"
import { contextType } from "../../shared/store/StoreReducer"
import { Customer } from "../domain/Customer"
import { CustomerFactory } from "../main/CustomerFactory"
import { customerType } from "./reducer/CustomerReducer"

export default function CustomerManage() {
    const {customers} = useStore()
    const dispatch = useDispatch()
    const findAllCustomerUsecase = CustomerFactory.findAllUsecase()
    
    useEffect(() => {
        (async () => {
            const customersData = await findAllCustomerUsecase.perform()
            dispatch({
                contextType: contextType.customer, 
                type: customerType.findAll, 
                payload: customersData})
            
        })()
    }, [dispatch])

    return (
        <Manage<Customer> headerInfo={{
                title: 'Clientes',
                subTitle : 'Gerencie seus clientes',
                inputPlaceholder: 'Digite o nome do cliente'
            }}
            tableInfo={{
                nameColumns: ['nome', 'celular', 'email', 'cpf'],
                data : customers
            }}/>
    )
}