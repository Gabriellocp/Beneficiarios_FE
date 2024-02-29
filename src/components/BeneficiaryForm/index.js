import React from 'react'
import styles from './styles.scss'
import Input from '../Input'
import InputCompositeValidator from '@/validation/InputValidation/InputCompositeValidator'
import InputValidationBuilder from '@/validation/InputValidation/InputValidationBuilder'
import Button from '../Button'
import useForm from '@/hooks/useForm'
const validators = new InputCompositeValidator([
    ...InputValidationBuilder.create('nome').email().required().build(),
    ...InputValidationBuilder.create('idade').required().build(),
    ...InputValidationBuilder.create('cpf').required().build(),
    ...InputValidationBuilder.create('rg').required().build()
])
// TODO: receive validators as props
export default function BeneficiaryForm() {
    const { handleSubmit, handleFieldChange, errors } = useForm({
        nome: '', idade: '', cpf: '', rg: ''
    }, validators)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const isValid = handleSubmit()
        console.log(isValid)
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <Input placeholder='Nome' error={errors.nome} onChange={(value) => handleFieldChange('nome', value)} />
            <Input placeholder='Idade' error={errors.idade} onChange={(value) => handleFieldChange('idade', value)} />
            <Input placeholder='CPF' error={errors.cpf} onChange={(value) => handleFieldChange('cpf', value)} />
            <Input placeholder='RG' error={errors.rg} onChange={(value) => handleFieldChange('rg', value)} />
            <Button type='submit'> Salvar</Button>
        </form>
    )
}
