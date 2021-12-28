import { getConnetion } from "../shared/Connection"
import { Product } from "./Product"
import { ProductDAO } from "./ProductDAO"

export class ProductDAOImpl implements ProductDAO {
    
    async getAll(): Promise<Product[]> {
        const products: Product[] = []
        const con = await getConnetion()

        try {
            const [rows]: Array<any> = await con.execute('select * from produto')
            for (const r of rows) {
                const product = Product.toDomain(r)
                console.log(r)
                products.push(product)
            }
        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return products
    }

    async insert(product: Product): Promise<Product| null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'insert into produto(id_produto, descricao, preco, qtdEstoque) values(?,?,?,?)',
                [product.id, product.description, product.price, product.qtyStock])

            if (fields?.affectedRows === 1)
                return product

        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            con.end()
        }

        return null;
    }

    async update(product: Product): Promise<Product| null> {
        const con = await getConnetion()

        try {
            const [fields]: any = await con.execute(
                'update produto set descricao = ?, preco = ?, qtdEstoque = ? where id_produto = ?',
                [product.description, product.price, product.qtyStock, product.id])

            if (fields?.affectedRows === 1)
                return product

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
            const [fields]: any = await con.execute('delete from produto where id_produto = ?',
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