import { useContext, useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { useStore } from "../../shared/store/StoreProvider"
import { Scheduling } from "../domain/Scheduling"
import { SchedulingFactory } from "../main/SchedulingFactory"

export default function SchedulingManage() {
    const {schedulings} = useStore()
    const findAllScheduling = SchedulingFactory.makeFindAllUsecase()
    
    useEffect(() => {
        (async () => {
            const schedulings = await findAllScheduling.perform()
           
        })()
    }, [])

    return (
        <Manage<Scheduling> headerInfo={
            {
                title: 'Agendamento',
                subTitle : 'Gerencie seus agendamento',
                inputPlaceholder: 'Digite o nome do cliente'
            }}
            tableInfo={{
                nameColumns: ['data', 'hora'],
                data : schedulings
            }}
            />
    )
}