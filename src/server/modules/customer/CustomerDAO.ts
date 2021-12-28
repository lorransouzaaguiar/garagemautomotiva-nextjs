import { Customer } from "./Customer";

export interface CustomerDAO{
     getAll() : Promise<Customer[]>
     insert(customer: Customer): Promise<Customer | null>
     update(customer: Customer): Promise<Customer | null>
     delete(id: String) : Promise<String | null>
}