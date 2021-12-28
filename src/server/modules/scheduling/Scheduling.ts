import validator from "validator"
import { SchedulingItem } from "./DTOs/SchedulingItem"

export class Scheduling {

    constructor(
        public readonly id: number,
        public readonly customerId: string,
        public readonly date: Date,
        public readonly hour: string,
    ) {}

    isValid(): string[] | true {
        let errorList: string[] = []

        Object.entries(this).forEach(entries => {
            if (validator.isEmpty(entries[1])) {
                errorList.push(`property ${entries[0]} is required!`)

            } else if (entries[0] === 'id' || entries[0] === 'customerId') {
                if (!validator.isUUID(entries[1]))
                    errorList.push('id property is not of UUID format!')
            }
        })


        if (errorList.length === 0) return true
        else return errorList

    }

    
}