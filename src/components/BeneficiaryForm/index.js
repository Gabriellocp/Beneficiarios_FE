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
    const { handleFieldChange, errors } = useForm({
        nome: '',
        idade: '',
        cpf: '',
        rg: '',
        dataDeNascimento: '',
        observacoes: '',
        quantidadeDeCestas: '',
        cep: '',
        endereco: '',
        numero: ''
    }, validators)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        // const isValid = handleSubmit()
        // TODO: do something when isValid
    }
    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            <Input placeholder='Nome' error={errors.nome} onChange={(value) => handleFieldChange('nome', value)} />
            <Input placeholder='Idade' error={errors.idade} onChange={(value) => handleFieldChange('idade', value)} />
            <Input placeholder='CPF' error={errors.cpf} onChange={(value) => handleFieldChange('cpf', value)} />
            <Input placeholder='RG' error={errors.rg} onChange={(value) => handleFieldChange('rg', value)} />
            <Input placeholder='Data de Nascimento' error={errors.dataDeNascimento} onChange={(value) => handleFieldChange('dataDeNascimento', value)} />
            <Input placeholder='Observações' error={errors.observacoes} onChange={(value) => handleFieldChange('observacoes', value)} />
            <Input placeholder='Qtd. Cestas' error={errors.quantidadeDeCestas} onChange={(value) => handleFieldChange('quantidadeDeCestas', value)} />
            <Input placeholder='CEP' error={errors.cep} onChange={(value) => handleFieldChange('cep', value)} />
            <Input placeholder='Endereço' error={errors.endereco} onChange={(value) => handleFieldChange('endereco', value)} />
            <Input placeholder='Número' error={errors.numero} onChange={(value) => handleFieldChange('numero', value)} />
            <div className={styles.actions}>
                <Button decoration='secondary'> Cancelar </Button>
                <Button type='submit'>
                    Salvar
                </Button>
            </div>
        </form>
    )
}
