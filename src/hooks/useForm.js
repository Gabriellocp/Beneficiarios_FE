import { useState } from 'react'
// This hooks intends to validate and
export default function useForm(initialValue, validators = null) {
    const [fields, setFields] = useState(initialValue)
    const [errors, setErrors] = useState(Object.keys(initialValue).reduce((acc, key) => { acc[key] = ''; return acc }, {}))
    const handleFieldChange = (field, value) => {
        setFields((prevState) => ({ ...prevState, [field]: value }))
        // Show an error everytime user changes an input
        // validateField(field, value)
    }
    const validateField = (field, value) => {
        const error = validators?.validate(field, value) ?? ''
        if (error) setErrors((prevState) => ({ ...prevState, [field]: error }))
        else setErrors((prevState) => ({ ...prevState, [field]: '' }))
        return error
    }
    const handleSubmit = () => {
        const isValid = Object.keys(fields).map((key) => validateField(key, fields[key]))
        return isValid.every((e) => !e)
    }
    return { fields, errors, handleFieldChange, handleSubmit }
}
