import { Product } from "./Product";

export interface ProductDAO{
     getAll() : Promise<Product[]>
     insert(product: Product): Promise<Product| null>
     update(product: Product): Promise<Product| null>
     delete(id: String) : Promise<String | null>
}

