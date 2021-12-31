import { useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { useStore } from "../../shared/store/StoreProvider"
import { Service } from "../domain/Service"
import { FindAllServicesUseCase } from "../domain/usecase/FindAllServicesUsecase"


export default function ServiceManage() {
    const {services} = useStore()
    const findAllServices = new FindAllServicesUseCase('http://localhost:3100/Service')
    
    useEffect(() => {
        (async () => {
            const servicesData = await findAllServices.perform()
            
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
                data: services
            }}
            />
    )
}