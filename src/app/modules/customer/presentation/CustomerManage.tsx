import { Button, Td, Tr } from "@chakra-ui/react"
import { useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { useDispatch, useStore } from "../../shared/store/StoreProvider"
import { contextType } from "../../shared/store/StoreReducer"
import { Customer } from "../domain/Customer"
import { CustomerFactory } from "../main/CustomerFactory"
import { customerType } from "./reducer/CustomerReducer"

export default function CustomerManage() {
    const { customers } = useStore()
    const dispatch = useDispatch()
    const findAllCustomerUsecase = CustomerFactory.findAllUsecase()

    useEffect(() => {
        (async () => {
            const customersData = await findAllCustomerUsecase.perform()
            dispatch({
                contextType: contextType.customer,
                type: customerType.findAll,
                payload: customersData
            })

        })()
    }, [dispatch])

    return (
        <Manage<Customer>
            headerInfo={{
                title: 'Clientes',
                subTitle: 'Gerencie seus clientes',
                inputPlaceholder: 'Digite o nome do cliente'
            }}
            tableInfo={{
                columnNames: ['nome', 'celular', 'email', 'cpf'],
            }}>

            {customers.map(customer => {
                return (
                    <Tr key={customer.id}>
                        {
                            Object.entries(customer).map((value, index) => {
                                if(value[0] !== 'id')
                                    return (<Td key={index}>{value[1]}</Td>)
                                return null
                        })}
                        <Td>
                            <Button borderRadius='50px' w='45px' bg='red' color='white'>R</Button>
                            <Button borderRadius='50px' w='45px'>E</Button>
                        </Td>
                    </Tr>
                )
            })}

        </Manage>
    )
}