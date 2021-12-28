import validator from "validator"

export class Product{

    constructor(
        public readonly id : string,
        public readonly description : string,
        public readonly price : number,
        public readonly qtyStock : number,
    ) {}

    isValid(): string[] | true {
        const errorList: string[] = []
        
        Object.entries(this).forEach(entries => {
            if(typeof entries[1] === 'number' && entries[1] <= 0) {
                errorList.push(`property ${entries[0]} is required`)
            }

            if(typeof entries[1] === 'string'){
                if(validator.isEmpty(entries[1]))
                    errorList.push(`property ${entries[0]} is required`)
            }
        })

        if (errorList.length === 0) return true
        else return errorList
    }

    static toDomain(r: any) {
        return new Product(
            r.id_produto,
            r.descricao,
            r.preco,
            r.qtdEstoque
        )
    }
}