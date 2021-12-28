import validator from "validator"

export class Customer {

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly number: string,
        public readonly email: string,
        public readonly CPF?: string) { }


    isValid(): string[] | true {
        const errorList: string[] = []
        
        Object.entries(this).forEach(entries => {
            if (entries[0] !== 'CPF') {
                if (validator.isEmpty(entries[1])) {
                    errorList.push(`property ${entries[0]} is required!`)
                } else {
                    if (entries[0] === 'id') {
                        if (!validator.isUUID(this.id))
                            errorList.push('id property is not of UUID format!')
                    }
                    if (entries[0] === 'email') {
                        if (!validator.isEmail(this.email)) {
                            errorList.push('invalid email!')
                        }
                    }
                }
            }
        })

        if (errorList.length === 0) return true
        else return errorList
    }

    static toDomain(r: any) {
        const customer: Customer = new Customer(
            r.id_cliente,
            r.nome,
            r.celular,
            r.email,
            r.cpf
        )
        return customer
    }
}


