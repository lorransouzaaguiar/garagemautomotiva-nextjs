import { Button, Td, Tr } from "@chakra-ui/react"
import { useEffect } from "react"
import TableAction from "~/app/components/manage/TableAction"
import { Manage } from "../../../components/manage/Manage"
import { useDispatch, useStore } from "../../shared/store/StoreProvider"
import { contextType } from "../../shared/store/StoreReducer"
import { Scheduling } from "../domain/Scheduling"
import { SchedulingFactory } from "../main/SchedulingFactory"
import { SchedulingMapper } from "./SchedulingMapper"
import { schedulingType } from "./SchedulingReducer"

export default function SchedulingManage() {
    const { schedulings } = useStore()
    const dispatch = useDispatch()
    
    const findAllScheduling = SchedulingFactory.findAllUsecase()
    const schedulingsPresenter = SchedulingMapper.toPresenter(schedulings)

    useEffect(() => {
        (async () => {
            const schedulingsData = await findAllScheduling.perform()
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
                subTitle: 'Gerencie seus agendamento',
                inputPlaceholder: 'Digite o nome do cliente'
            }}
            tableInfo={{
                columnNames: ['cliente', 'data', 'hora'],
            }}>

            {schedulingsPresenter.map((scheduling, index) => {
                return (
                    <Tr key={index}>
                        {
                            Object.entries(scheduling).map((value, index) => 
                                <Td key={index}>{value[1]}</Td>
                            )}
                        <TableAction />
                    </Tr>
                )
            })}
        </Manage>
    )
}