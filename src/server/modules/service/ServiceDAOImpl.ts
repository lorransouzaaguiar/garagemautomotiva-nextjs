import { getConnetion } from "../shared/Connection";
import { Service } from "./Service";
import { ServiceDAO } from "./ServiceDAO";

export class ServiceDAOImpl implements ServiceDAO {
    
    async getAll(): Promise<Service[]> {
        const services : Service [] = []
        const con = await getConnetion()

        try {
            const [rows]: any[] = await con.execute('select * from servico')
            for (const r of rows) {
                const service = Service.toDomain(r)
                services.push(service)
            }
        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return services

    }

    async insert(service: Service): Promise<Service | null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'insert into servico(id_servico, descricao, preco) values(?,?,?)',
                [service.id, service.description, service.price])

            if (fields?.affectedRows === 1)
                return service

        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return null;
    }
    
    async update(service: Service): Promise<Service | null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'update servico set descricao = ?, preco = ? where id_servico = ?',
                [service.description, service.price, service.id])

            if (fields?.affectedRows === 1)
                return service

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
            const [fields]: any = await con.execute('delete from servico where id_servico = ?',
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