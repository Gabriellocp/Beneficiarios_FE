class EmailInputValidator {
    constructor(field) {
        this.field = field
    }

    validate(value) {
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return (value.toLowerCase().match(emailRegEx) || !value) ? null : 'E-mail inválido'
    }
}

export default EmailInputValidator
