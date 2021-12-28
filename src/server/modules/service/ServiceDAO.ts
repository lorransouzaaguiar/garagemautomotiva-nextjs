import { Service } from "./Service";

export interface ServiceDAO {
    getAll(): Promise<Service[]>
    insert(service: Service): Promise<Service | null>
    update(service: Service): Promise<Service | null>
    delete(id: String): Promise<String | null>
}