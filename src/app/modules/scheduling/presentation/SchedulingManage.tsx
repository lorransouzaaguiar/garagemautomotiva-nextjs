import { useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { useDispatch, useStore } from "../../shared/store/StoreProvider"
import { contextType } from "../../shared/store/StoreReducer"
import { Scheduling } from "../domain/Scheduling"
import { SchedulingFactory } from "../main/SchedulingFactory"
import { schedulingType } from "./SchedulingReducer"

export default function SchedulingManage() {
    const {schedulings} = useStore()
    const dispatch = useDispatch()
    const findAllScheduling = SchedulingFactory.findAllUsecase()
    
    useEffect(() => {
        (async () => {
            const schedulingsData = await findAllScheduling.perform()
            console.log(schedulingsData)
            dispatch({
                contextType: contextType.scheduling,
                type: schedulingType.findAll,
                payload: schedulingsData
            })
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
                nameColumns: ['data', 'hora', 'aaa', 'bbbb', 'xxxx'],
                data : schedulings
            }}
            />
    )
}