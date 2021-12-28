import { SchedulingItem } from "./SchedulingItem";

export type SchedulingDB = {
    id: number;
    customer: {}
    date: string,
    hour: string,
    items: SchedulingItem[]
}

export function toSchedulingDB(r: any, items: SchedulingItem[]): SchedulingDB {
    const stringDate = r.data.toLocaleDateString('pt-br')
    
    return {
        id: r.id_agendamento,
        customer: {
            id: r.id_cliente,
            name: r.nome,
            number: r.celular,
            email: r.email,
            CPF: r.cpf
        },
        date: stringDate,
        hour: r.hora,
        items: items
    }
}