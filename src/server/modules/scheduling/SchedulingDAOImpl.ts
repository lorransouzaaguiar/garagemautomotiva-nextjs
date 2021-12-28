import { getConnetion } from "../shared/Connection";
import { Scheduling } from "./Scheduling";
import { SchedulingDAO } from "./SchedulingDAO";
import { SchedulingItem } from "./DTOs/SchedulingItem";
import { SchedulingDB, toSchedulingDB } from "./DTOs/SchedulingDB";

export class SchedulingDAOImpl implements SchedulingDAO {
   
    async findAll(): Promise<SchedulingDB[]> {
        const schedulings: SchedulingDB[] = []
        const con = await getConnetion()
        
        const sql = 'SELECT * FROM  AGENDAMENTO A ' +
                    'INNER JOIN CLIENTE C ON A.ID_CLIENTE = C.ID_CLIENTE;'
        try {
            const [rows]: any[] = await con.execute(sql)
            for (const r of rows) {
                const items = await this.findAllItemsByScheduling(r.id_agendamento)
                
                if(items.length != 0){
                    const scheduling : SchedulingDB = toSchedulingDB(r, items)
                    schedulings.push(scheduling)
                }
            }
        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return schedulings
    }

    async findAllItemsByScheduling(id: number): Promise<SchedulingItem[]> {
        const items: SchedulingItem[] = []
        
        const conn = await getConnetion()
        const sql = 'SELECT S.* ' + 
            'FROM AGENDAMENTO_SERVICO SA ' +
            'INNER JOIN SERVICO S ON SA.ID_SERVICO = S.ID_SERVICO ' +
            `WHERE SA.ID_AGENDAMENTO = ${id};`
        
        try {
            const [rows] : any = await conn.execute(sql)
            for (const r of rows) {
                const item : SchedulingItem = {
                    id: r.id_servico, description: r.descricao, price: r.preco}
                items.push(item)
            }
        }catch (error: any){
            console.log(error.sqlMessage)
        } finally {
            conn.end()
        }

        return items
    }

    async insert(scheduling: Scheduling): Promise<Scheduling | null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'insert into agendamento(id_agendamento, id_cliente, data, hora) values(?,?,?, ?)',
                [scheduling.id, scheduling.customerId, scheduling.date, scheduling.hour])

            if (fields?.affectedRows === 1)
                return scheduling

        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return null;
    }

    async update(scheduling: Scheduling): Promise<Scheduling | null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'update agendamento set data = ?, hora = ? where id_agendamento = ?',
                [scheduling.id, scheduling.date, scheduling.hour])

            if (fields?.affectedRows === 1)
                return scheduling

        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return null;
    }

    async delete(id: String): Promise<String | null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute('delete from agendamento where id_agendamento = ?',
                [id])

            if (fields?.affectedRows === 1)
                return id

        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return null;
    }



}