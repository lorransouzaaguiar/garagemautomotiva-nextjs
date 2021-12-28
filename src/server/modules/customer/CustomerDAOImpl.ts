import { getConnetion } from "~/server/modules/shared/Connection";
import { Customer } from "./Customer";
import { CustomerDAO } from "./CustomerDAO";

export class CustomerDAOImpl implements CustomerDAO {
    
    async getAll(): Promise<Customer[]> {
        const customers: Customer[] = []
        const con = await getConnetion()

        try {
            const [rows]: Array<any> = await con.execute('select * from cliente')
            for (const r of rows) {
                const customer = Customer.toDomain(r)
                customers.push(customer)
            }
        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return customers
    }

    async insert(customer: Customer): Promise<Customer | null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'insert into cliente(id_cliente, nome, celular, email, cpf) values(?,?,?,?,?)',
                [customer.id, customer.name, customer.number, customer.email, customer.CPF])

            if (fields?.affectedRows === 1)
                return customer

        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return null;
    }

    async update(customer: Customer): Promise<Customer | null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'update cliente set nome = ?, celular = ?, email = ?, cpf = ? where id_cliente = ?',
                [customer.name, customer.number, customer.email, customer.CPF, customer.id])

            if (fields?.affectedRows === 1)
                return customer

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
            const [fields]: any = await con.execute('delete from cliente where id_cliente = ?',
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