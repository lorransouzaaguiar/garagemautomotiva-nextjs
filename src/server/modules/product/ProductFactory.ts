import { ProductController } from "./ProductController";
import { ProductDAOImpl } from "./ProductDAOImpl";

export class ProductFactory {

    static makeController(): ProductController{
        const dao = new ProductDAOImpl()
        return new ProductController(dao)
    }
}