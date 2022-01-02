import { useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { useDispatch, useStore } from "../../shared/store/StoreProvider"
import { contextType } from "../../shared/store/StoreReducer"
import { Service } from "../domain/Service"
import { ServiceFactory } from "../main/ServiceFactory"
import { serviceType } from "./ServiceReducer"


export default function ServiceManage() {
    const { services } = useStore()
    const dispatch = useDispatch()
    const findAllServices = ServiceFactory.findAllUsecase()

    useEffect(() => {
        (async () => {
            const servicesData = await findAllServices.perform()
            dispatch({
                contextType: contextType.service,
                type: serviceType.findAll,
                payload: servicesData
            })
            console.log(services)
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