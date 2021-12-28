import { useContext, useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { AppContext } from "../../../components/StoreProvider"
import { Scheduling } from "../domain/Scheduling"
import { SchedulingFactory } from "../main/SchedulingFactory"

export default function SchedulingManage() {
    const {state, dispatch} = useContext(AppContext)
    const findAllScheduling = SchedulingFactory.makeFindAllUsecase()
    
    useEffect(() => {
        (async () => {
            const schedulings = await findAllScheduling.perform()
            dispatch({type: 'FINDALL_SCHEDULING', payload: schedulings})
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
                data : state.schedulings
            }}
            />
    )
}