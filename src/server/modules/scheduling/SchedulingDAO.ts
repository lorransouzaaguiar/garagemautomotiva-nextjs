import { Scheduling } from "./Scheduling"
import { SchedulingItem } from "./DTOs/SchedulingItem"
import { SchedulingDB } from "./DTOs/SchedulingDB"

export interface SchedulingDAO {
    findAll(): Promise<SchedulingDB[]>
    findAllItemsByScheduling(id: number) : Promise<SchedulingItem[]>
    insert(scheduling: Scheduling): Promise<Scheduling | null>
    update(scheduling: Scheduling): Promise<Scheduling | null>
    delete(id: String): Promise<String | null>
}