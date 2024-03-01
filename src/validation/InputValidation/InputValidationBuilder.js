import EmailInputValidator from './EmailInputValidator'
import RequiredInputValidator from './RequiredInputValidator'

class InputValidationBuilder {
    // Variable to ensure constructor will be called just inside this class
    static initialized = false
    constructor(field, validators) {
        if (!InputValidationBuilder.initialized) {
            throw Error('Constructor cannot be called directly')
        }
        this.field = field
        this.validators = validators
    }

    static create(field) {
        InputValidationBuilder.initialized = true
        const instance = new InputValidationBuilder(field, [])
        InputValidationBuilder.initialized = false
        return instance
    }

    required() {
        this.validators.push(new RequiredInputValidator(this.field))
        return this
    }

    email() {
        this.validators.push(new EmailInputValidator(this.field))
        return this
    }

    build() {
        return this.validators
    }
}

export default InputValidationBuilder
