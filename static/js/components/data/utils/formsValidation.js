export class FormValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]'
    }

    errorMessages = {
        valueMissing: () => 'Please fill in this field',
        patternMismatch: ({title}) => title || 'The password must contain uppercase and lowercase letters, as well as special characters',
        tooShort: ({minLength}) => `The value is too short, minimum characters - ${minLength}.`,
        tooLong: ({maxLength}) => `The value is too long, maximum characters - ${maxLength}.`,
    }

    constructor() {
        this.bindEvents()
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)

        fieldErrorsElement.innerHTML = errorMessages.map((message) => `<span class="field-errors">${message}</span`).join(' ')
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity
        console.log(errors)
        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {

            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldControlElement))
            }
        })
        console.log(errorMessages)

        this.manageErrors(fieldControlElement, errorMessages)

        const isValid = errorMessages.length === 0

        fieldControlElement.ariaInvalid = !isValid

        return isValid
    }

    onSubmit(event) {
        const isFormElement = event.target.matches(this.selectors.form)

        if (!isFormElement) return

        const requiredControlElements = [...event.target.elements]
            .filter(({ required }) => required)

        let isFormValid = true
        let firstInvalidFieldControl = null

        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)

            if (!isFieldValid) {
                isFormValid = false
            }

            if (!firstInvalidFieldControl) {
                firstInvalidFieldControl = element
            }
        })

        if (!isFormValid) {
            console.log(isFormElement)
            event.preventDefault()
            firstInvalidFieldControl.focus()
        }
    }

    onBlur(event) {
        const {target} = event;
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if (isFormField && isRequired) {
            this.validateField(target)
        }
    }

    bindEvents() {
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, {capture: true})

        document.addEventListener('submit', (event) => {
            this.onSubmit(event)
        })
    }
}
