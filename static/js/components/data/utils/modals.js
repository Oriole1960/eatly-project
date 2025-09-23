export class Modals {

    constructor() {

        this.ui = {
            body: document.querySelector("body"),

            buttons: {
                sighBtn: document.querySelectorAll(".btn-sighup"),
                logBtn: document.querySelectorAll(".btn--login"),
            },

            sighupForm: {
                modal: document.querySelector(".validation-sighup__modal"),
                overlay: document.querySelector(".overlay__validation-sighup"),

                name: {
                    input: document.getElementById("nameSighup"),
                    svg1: document.getElementById("nameSighupSvg1"),
                    svg2: document.getElementById("nameSighupSvg2"),
                },

                email: {
                    input: document.getElementById("emailSighup"),
                    svg1: document.getElementById("emailSighupSvg1"),
                    svg2: document.getElementById("emailSighupSvg2"),
                },

                password: {
                    input: document.getElementById("passSighup"),
                    svg1: document.getElementById("passSighupSvg1"),
                    svg2: document.getElementById("passSighupSvg2"),
                    toggleSvg1: document.getElementById("sighup-form-toggle-svg1"),
                    toggleSvg2: document.getElementById("sighup-form-toggle-svg2"),
                    toggleBtn: document.querySelector(".sighup-form-toggle-btn"),
                },

                submitBtn: document.querySelector(".sighup__btn"),
            },

            loginForm: {

                modal: document.querySelector(".validation-login__modal"),
                overlay: document.querySelector(".overlay__validation-login"),

                email: {
                    input: document.getElementById("emailLogin"),
                    svg1: document.getElementById("emailLoginSvg1"),
                    svg2: document.getElementById("emailLoginSvg2"),
                },

                password: {
                    input: document.getElementById("passLogin"),
                    svg1: document.getElementById("passLoginSvg1"),
                    svg2: document.getElementById("passLoginSvg2"),
                    toggleSvg1: document.getElementById("login-form-toggle-svg1"),
                    toggleSvg2: document.getElementById("login-form-toggle-svg2"),
                    toggleBtn: document.querySelector(".login-form-toggle-btn"),
                },

                submitBtn: document.querySelector(".login__btn"),
            }
        }
    }

    addListenerToForms() {
        this.ui.buttons.sighBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.ui.sighupForm.overlay.classList.add("overlayOn");
                this.ui.sighupForm.modal.classList.add("overlayOn");
                this.ui.body.classList.add("overlayOn");
                this.ui.loginForm.modal.classList.remove("overlayOn");
                this.ui.loginForm.overlay.classList.remove("overlayOn");
            })
        })

        this.ui.buttons.logBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.ui.loginForm.overlay.classList.add("overlayOn");
                this.ui.loginForm.modal.classList.add("overlayOn");
                this.ui.body.classList.add("overlayOn");
                this.ui.sighupForm.modal.classList.remove("overlayOn");
                this.ui.sighupForm.overlay.classList.remove("overlayOn");
            })
        })


        this.ui.sighupForm.overlay.addEventListener("click", (e) => {
            if (e.target === this.ui.sighupForm.overlay) {
                this.ui.sighupForm.overlay.classList.remove("overlayOn");
                this.ui.sighupForm.modal.classList.remove("overlayOn");
                this.ui.loginForm.modal.classList.remove("overlayOn");
                this.ui.body.classList.remove("overlayOn");
            }
        })

        this.ui.loginForm.overlay.addEventListener("click", (e) => {
            if (e.target === this.ui.loginForm.overlay) {
                this.ui.loginForm.overlay.classList.remove("overlayOn");
                this.ui.sighupForm.modal.classList.remove("overlayOn");
                this.ui.loginForm.modal.classList.remove("overlayOn");
                this.ui.body.classList.remove("overlayOn");
            }
        })

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.ui.sighupForm.overlay.classList.remove("overlayOn");
                this.ui.sighupForm.modal.classList.remove("overlayOn");
                this.ui.body.classList.remove("overlayOn");
            }
        })
    }

    switchPassword() {
        this.ui.sighupForm.password.toggleBtn.addEventListener("click", (e) => {
            const position = this.ui.sighupForm.password.input.selectionStart;
            this.ui.sighupForm.password.toggleSvg1.style.display = this.ui.sighupForm.password.toggleSvg1.style.display === "block" ? "none" : "block";
            this.ui.sighupForm.password.toggleSvg2.style.display = this.ui.sighupForm.password.toggleSvg2.style.display === "none" ? "block" : "none";
            this.ui.sighupForm.password.input.type = this.ui.sighupForm.password.input.type === "password" ? "text" : "password";
            this.ui.sighupForm.password.input.focus();
            this.ui.sighupForm.password.input.setSelectionRange(position, position);

        })

        this.ui.loginForm.password.toggleBtn.addEventListener("click", (e) => {
            const position = this.ui.loginForm.password.input.selectionStart;
            this.ui.loginForm.password.toggleSvg1.style.display = this.ui.loginForm.password.toggleSvg1.style.display === "block" ? "none" : "block";
            this.ui.loginForm.password.toggleSvg2.style.display = this.ui.loginForm.password.toggleSvg2.style.display === "none" ? "block" : "none";
            this.ui.loginForm.password.input.type = this.ui.loginForm.password.input.type === "password" ? "text" : "password";
            this.ui.loginForm.password.input.focus();
            this.ui.loginForm.password.input.setSelectionRange(position, position);

        })
    }

    updateInputVisualState() {
        this.ui.sighupForm.name.svg2.style.display = "none"
        this.ui.sighupForm.email.svg2.style.display = "none"
        this.ui.sighupForm.password.svg2.style.display = "none"
        this.ui.loginForm.email.svg2.style.display = "none"
        this.ui.loginForm.password.svg2.style.display = "none"
        this.ui.sighupForm.password.toggleSvg1.style.display = "block"
        this.ui.loginForm.password.toggleSvg1.style.display = "block"
        this.ui.sighupForm.password.toggleSvg2.style.display = "none"
        this.ui.loginForm.password.toggleSvg2.style.display = "none"


        this.ui.sighupForm.name.input.addEventListener("input", (e) => {
            const hasText = this.ui.sighupForm.name.input.value.trim().length !== 0
            this.ui.sighupForm.name.svg1.style.display = hasText ? "none" : "block";
            this.ui.sighupForm.name.svg2.style.display = hasText ? "block" : "none";
            this.ui.sighupForm.name.input.classList.toggle("input-focus", hasText)
        })

        this.ui.sighupForm.email.input.addEventListener("input", (e) => {
            const hasText = this.ui.sighupForm.email.input.value.trim().length !== 0
            this.ui.sighupForm.email.svg1.style.display = hasText ? "none" : "block";
            this.ui.sighupForm.email.svg2.style.display = hasText ? "block" : "none";
            this.ui.sighupForm.email.input.classList.toggle("input-focus", hasText)
        })

        this.ui.sighupForm.password.input.addEventListener("input", (e) => {
            const hasText = this.ui.sighupForm.password.input.value.trim().length !== 0
            this.ui.sighupForm.password.svg1.style.display = hasText ? "none" : "block";
            this.ui.sighupForm.password.svg2.style.display = hasText ? "block" : "none";
            this.ui.sighupForm.password.input.classList.toggle("input-focus", hasText)
            this.ui.sighupForm.password.toggleBtn.classList.toggle("input-focus", hasText)
            this.ui.sighupForm.password.toggleSvg1.classList.toggle("input-focus", hasText)
            this.ui.sighupForm.password.toggleSvg2.classList.toggle("input-focus", hasText)
        })

        this.ui.loginForm.email.input.addEventListener("input", (e) => {
            const hasText = this.ui.loginForm.email.input.value.trim().length !== 0
            this.ui.loginForm.email.svg1.style.display = hasText ? "none" : "block";
            this.ui.loginForm.email.svg2.style.display = hasText ? "block" : "none";
            this.ui.loginForm.email.input.classList.toggle("input-focus", hasText)
        })

        this.ui.loginForm.password.input.addEventListener("input", (e) => {
            const hasText = this.ui.loginForm.password.input.value.trim().length !== 0
            this.ui.loginForm.password.svg1.style.display = hasText ? "none" : "block";
            this.ui.loginForm.password.svg2.style.display = hasText ? "block" : "none";
            this.ui.loginForm.password.input.classList.toggle("input-focus", hasText)
            this.ui.loginForm.password.toggleBtn.classList.toggle("input-focus", hasText)
            this.ui.loginForm.password.toggleSvg1.classList.toggle("input-focus", hasText)
            this.ui.loginForm.password.toggleSvg2.classList.toggle("input-focus", hasText)
        })
    }

    submitSighupForm() {
        this.ui.sighupForm.submitBtn.addEventListener("click", (event) => {
            event.preventDefault()
        })
    }

    submitLoginForm() {
        this.ui.loginForm.submitBtn.addEventListener("click", (event) => {
            event.preventDefault()
        })
    }

    init() {
        this.addListenerToForms()
        this.switchPassword()
        this.updateInputVisualState()
        this.submitSighupForm()
        this.submitLoginForm()
    }
}


