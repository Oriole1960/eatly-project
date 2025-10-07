export class FormDataCollector {
    selectors = {
        login: document.getElementById('login-form'),
        signup: document.getElementById('signup-form'),
    }
    constructor() {
        this.bindEvents()
    }

    extractData(event) {
       const formElement = event.target.closest('[data-js-form]')
        if (!formElement) return

        const formData = Object.fromEntries( new FormData(formElement).entries() )
        this.onFormSubmit(formData, formElement)
    }

    onFormSubmit(formData, formElement) {
// Фетч запрос
    }

    bindEvents() {
        document.addEventListener('submit', (event) => {
            event.preventDefault();
            this.extractData(event)
        })
    }
}