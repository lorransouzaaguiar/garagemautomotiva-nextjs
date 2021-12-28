import { useContext, useEffect } from "react"
import { Manage } from "../../../components/manage/Manage"
import { AppContext } from "../../../components/StoreProvider"
import { Scheduling } from "../domain/Scheduling"
import { FindAllSchedulingUsecase } from "../domain/usecase/FindAllSchedulingsUsecase"

export default function SchedulingManage() {

    const {state, dispatch} = useContext(AppContext)
    
    useEffect(() => {
        (async () => {
            const findAllCustomers = new FindAllSchedulingUsecase('http://localhost:3100/scheduling')
            const customers = await findAllCustomers.perform()
            
            //dispatch({type: 'FINDALL_CUSTOMERS', payload: customers})
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