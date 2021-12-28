import * as yup from 'yup'

export class CustomerValidator {

    readonly schema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        number: yup.string().required('O número é obrigatório'),
        email: yup.string().email('O email precisa ser válido').required('O email é obrigatório')
    })

}