import { useContext, useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { AppContext } from "../../../components/StoreProvider"
import { Service } from "../domain/Service"
import { FindAllServicesUseCase } from "../domain/usecase/FindAllServicesUsecase"


export default function ServiceManage() {

    const {state, dispatch} = useContext(AppContext)
    
    useEffect(() => {
        (async () => {
            const findAllServices = new FindAllServicesUseCase('http://localhost:3100/Service')
            const services = await findAllServices.perform()
            console.log(services)
            //dispatch({type: 'FINDALL_ServiceS', payload: Services})
        })()
    }, [])

    return (
        <Manage<Service> headerInfo={
            {
                title: 'Cliente',
                subTitle : 'Gerencie seus clientes',
                inputPlaceholder: 'Digite o nome do cliente'
            }}
            tableInfo={{
                nameColumns: ['descição', 'preço'],
                data : state.services
            }}
            />
    )
}