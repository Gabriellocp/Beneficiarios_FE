class RequiredInputValidator {
    constructor(field) {
        this.field = field
    }

    validate(value) {
        return value ? null : 'Campo obrigatório'
    }
}

export default RequiredInputValidator
