import validator from "validator"

export class Service {

    constructor(
        public readonly id: string,
        public readonly description: string,
        public readonly price: number
    ) { }

    isValid(): string[] | true {
        const errorList: string[] = []
        Object.entries(this).forEach(entries => {
            if(entries[0] !== 'price') {
                
                if (validator.isEmpty(entries[1]) && entries[0] !== 'price') {
                    errorList.push(`property ${entries[0]} is required!`)
                } else if (this.price == NaN || this.price < 0)
                    errorList.push('invalid price')
            }
        })

        if (errorList.length === 0) return true
        else return errorList
    }

    static toDomain(r: any){
        return new Service(
            r.id_servico,
            r.descricao,
            r.preco
        )
    }
}