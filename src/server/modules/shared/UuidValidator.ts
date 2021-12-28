import validator from "validator"

export function isEmptyOrIsNotUUID(id: string): string {
    if (validator.isEmpty(id))
        return 'property id is required!'

    if (!validator.isUUID(id))
        return 'id property is not of UUID format!'

    return ''
}