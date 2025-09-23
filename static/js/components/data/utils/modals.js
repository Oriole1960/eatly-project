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

    init() {
        this.addListenerToForms()
        this.switchPassword()
        this.updateInputVisualState()
    }
}


// const sighBtn = document.querySelectorAll(".btn-sighup");
// const logBtn = document.querySelectorAll(".btn--login");
//
// const sighModal = document.querySelector(".validation-sighup__modal");
// const logModal = document.querySelector(".validation-login__modal");
// const overlay = document.querySelector(".overlay__validation-sighup");
// const overlayLogin = document.querySelector(".overlay__validation-login");
// const body = document.querySelector("body");
//
// const emailInputLogin = document.getElementById("emailLogin");
// const emailLoginSvg1 = document.getElementById("emailLoginSvg1");
// const emailLoginSvg2 = document.getElementById("emailLoginSvg2");
//
// const passInputLogin = document.getElementById("passLogin");
// const passLoginSvg1 = document.getElementById("passLoginSvg1");
// const passLoginSvg2 = document.getElementById("passLoginSvg2");
// const formToggleSvgLogin1 = document.getElementById("login-form-toggle-svg1")
// const formToggleSvgLogin2 = document.getElementById("login-form-toggle-svg2")
// const formToggleBtnLogin = document.querySelector(".login-form-toggle-btn");
//
//
// const nameInputSighup = document.getElementById("nameSighup");
// const nameSighupSvg1 = document.getElementById("nameSighupSvg1");
// const nameSighupSvg2 = document.getElementById("nameSighupSvg2");
//
// const emailInputSighup = document.getElementById("emailSighup");
// const emailSighupSvg1 = document.getElementById("emailSighupSvg1");
// const emailSighupSvg2 = document.getElementById("emailSighupSvg2");
//
// const passInputSighup = document.getElementById("passSighup");
// const passSighupSvg1 = document.getElementById("passSighupSvg1");
// const passSighupSvg2 = document.getElementById("passSighupSvg2");
// const formToggleSvgSighup1 = document.getElementById("sighup-form-toggle-svg1")
// const formToggleSvgSighup2 = document.getElementById("sighup-form-toggle-svg2")
// const formToggleBtnSighup = document.querySelector(".sighup-form-toggle-btn");
//
//
// // окно со входом
// sighBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         overlay.classList.add("overlayOn");
//         sighModal.classList.add("overlayOn");
//         body.classList.add("overlayOn");
//         logModal.classList.remove("overlayOn");
//         overlayLogin.classList.remove("overlayOn");
//     })
// })
//
// logBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         overlayLogin.classList.add("overlayOn");
//         logModal.classList.add("overlayOn");
//         body.classList.add("overlayOn");
//         sighModal.classList.remove("overlayOn");
//         overlay.classList.remove("overlayOn");
//     })
// })
//
//
// overlay.addEventListener("click", (e) => {
//     if (e.target === overlay) {
//         overlay.classList.remove("overlayOn");
//         sighModal.classList.remove("overlayOn");
//         logModal.classList.remove("overlayOn");
//         body.classList.remove("overlayOn");
//     }
// })
//
// overlayLogin.addEventListener("click", (e) => {
//     if (e.target === overlayLogin) {
//         overlayLogin.classList.remove("overlayOn");
//         sighModal.classList.remove("overlayOn");
//         logModal.classList.remove("overlayOn");
//         body.classList.remove("overlayOn");
//     }
// })
//
// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//         overlay.classList.remove("overlayOn");
//         sighModal.classList.remove("overlayOn");
//         body.classList.remove("overlayOn");
//     }
//
//
// })
//
// const switchPassword = () => {
//     formToggleBtnSighup.addEventListener("click", (e) => {
//         const position = passInputSighup.selectionStart;
//         formToggleSvgSighup1.style.display = formToggleSvgSighup1.style.display === "block" ? "none" : "block";
//         formToggleSvgSighup2.style.display = formToggleSvgSighup2.style.display === "none" ? "block" : "none";
//         passInputSighup.type = passInputSighup.type === "password" ? "text" : "password";
//         passInputSighup.focus();
//         passInputSighup.setSelectionRange(position, position);
//
//     })
//
//     formToggleBtnLogin.addEventListener("click", (e) => {
//         const position = passInputLogin.selectionStart;
//         formToggleSvgLogin1.style.display = formToggleSvgLogin1.style.display === "block" ? "none" : "block";
//         formToggleSvgLogin2.style.display = formToggleSvgLogin2.style.display === "none" ? "block" : "none";
//         passInputLogin.type = passInputLogin.type === "password" ? "text" : "password";
//         passInputLogin.focus();
//         passInputLogin.setSelectionRange(position, position);
//
//     })
// }
//
// const updateInputVisualState = () => {
//     nameSighupSvg2.style.display = "none"
//     emailSighupSvg2.style.display = "none"
//     passSighupSvg2.style.display = "none"
//     emailLoginSvg2.style.display = "none"
//     passLoginSvg2.style.display = "none"
//     formToggleSvgSighup1.style.display = "block"
//     formToggleSvgLogin1.style.display = "block"
//     formToggleSvgSighup2.style.display = "none"
//     formToggleSvgLogin2.style.display = "none"
//
//
//     nameInputSighup.addEventListener("input", (e) => {
//         const hasText = nameInputSighup.value.trim().length !== 0
//         nameSighupSvg1.style.display = hasText ? "none" : "block";
//         nameSighupSvg2.style.display = hasText ? "block" : "none";
//         nameInputSighup.classList.toggle("input-focus", hasText)
//     })
//
//     emailInputSighup.addEventListener("input", (e) => {
//         const hasText = emailInputSighup.value.trim().length !== 0
//         emailSighupSvg1.style.display = hasText ? "none" : "block";
//         emailSighupSvg2.style.display = hasText ? "block" : "none";
//         emailInputSighup.classList.toggle("input-focus", hasText)
//     })
//
//     passInputSighup.addEventListener("input", (e) => {
//         const hasText = passInputSighup.value.trim().length !== 0
//         passSighupSvg1.style.display = hasText ? "none" : "block";
//         passSighupSvg2.style.display = hasText ? "block" : "none";
//         passInputSighup.classList.toggle("input-focus", hasText)
//         formToggleBtnSighup.classList.toggle("input-focus", hasText)
//         formToggleSvgSighup1.classList.toggle("input-focus", hasText)
//         formToggleSvgSighup2.classList.toggle("input-focus", hasText)
//     })
//
//     emailInputLogin.addEventListener("input", (e) => {
//         const hasText = emailInputLogin.value.trim().length !== 0
//         emailLoginSvg1.style.display = hasText ? "none" : "block";
//         emailLoginSvg2.style.display = hasText ? "block" : "none";
//         emailInputLogin.classList.toggle("input-focus", hasText)
//     })
//
//     passInputLogin.addEventListener("input", (e) => {
//         const hasText = passInputLogin.value.trim().length !== 0
//         passLoginSvg1.style.display = hasText ? "none" : "block";
//         passLoginSvg2.style.display = hasText ? "block" : "none";
//         passInputLogin.classList.toggle("input-focus", hasText)
//         formToggleBtnLogin.classList.toggle("input-focus", hasText)
//         formToggleSvgLogin1.classList.toggle("input-focus", hasText)
//         formToggleSvgLogin2.classList.toggle("input-focus", hasText)
//     })
// }
//
// updateInputVisualState()
//
// switchPassword()

