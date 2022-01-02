import { useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { useDispatch, useStore } from "../../shared/store/StoreProvider"
import { Service } from "../domain/Service"
import { FindAllServicesUseCase } from "../domain/usecase/FindAllServicesUsecase"
import { ServiceFactory } from "../main/ServiceFactory"


export default function ServiceManage() {
    const { services } = useStore()
    const dispatch = useDispatch()
    const findAllServices = ServiceFactory.findAllUsecase()

    useEffect(() => {
        (async () => {
            const servicesData = await findAllServices.perform()
            
        })()
    }, [])

    return (
        <Manage<Service> headerInfo={
            {
                title: 'Cliente',
                subTitle: 'Gerencie seus clientes',
                inputPlaceholder: 'Digite o nome do cliente'
            }}
            tableInfo={{
                columnNames: ['descição', 'preço'],

            }} >

        </Manage>
    )
}