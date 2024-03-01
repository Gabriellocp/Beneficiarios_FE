class InputCompositeValidator {
    constructor(validators) {
        this.validators = validators
    }

    validate(field, value) {
        const fieldValidators = this.validators.filter((validator) => validator.field === field)
        for (const v of fieldValidators) {
            const error = v.validate(value)
            if (error) return error
        }
        return null
    }
}

export default InputCompositeValidator
