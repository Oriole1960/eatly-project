const sighBtn = document.querySelector(".btn-sighup");
const sighModal = document.querySelector(".modal-validation__sighup");
const overLay = document.querySelector(".modal__overlay");
const body = document.querySelector("body");

const nameInput = document.getElementById("nameSighup");
const nameSighupSvg1 = document.getElementById("nameSighupSvg1");
const nameSighupSvg2 = document.getElementById("nameSighupSvg2");

const emailInput = document.getElementById("emailSighup");
const emailSighupSvg1 = document.getElementById("emailSighupSvg1");
const emailSighupSvg2 = document.getElementById("emailSighupSvg2");

const passInput = document.getElementById("passSighup");
const passSighupSvg1 = document.getElementById("passSighupSvg1");
const passSighupSvg2 = document.getElementById("passSighupSvg2");

// окно со входом

sighBtn.addEventListener("click", (e) => {
    overLay.classList.add("overlayOn");
    sighModal.classList.add("overlayOn");
    body.classList.add("overlayOn");
})

overLay.addEventListener("click", (e) => {
    if (e.target === overLay) {
        overLay.classList.remove("overlayOn");
        sighModal.classList.remove("overlayOn");
        body.classList.remove("overlayOn");
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overLay.classList.remove("overlayOn");
        sighModal.classList.remove("overlayOn");
        body.classList.remove("overlayOn");
    }
})

const updateInputVisualState = () => {
    nameSighupSvg2.style.display = "none"
    emailSighupSvg2.style.display = "none"
    passSighupSvg2.style.display = "none"

    nameInput.addEventListener("input", (e) => {
        const hasText = nameInput.value.trim().length !== 0
        nameSighupSvg1.style.display = hasText ? "none" : "block";
        nameSighupSvg2.style.display = hasText ? "block" : "none";
        nameInput.classList.toggle("input-focus", hasText)
    })

    emailInput.addEventListener("input", (e) => {
        const hasText = emailInput.value.trim().length !== 0
        emailSighupSvg1.style.display = hasText ? "none" : "block";
        emailSighupSvg2.style.display = hasText ? "block" : "none";
        emailInput.classList.toggle("input-focus", hasText)
    })

    passInput.addEventListener("input", (e) => {
        const hasText = passInput.value.trim().length !== 0
        passSighupSvg1.style.display = hasText ? "none" : "block";
        passSighupSvg2.style.display = hasText ? "block" : "none";
        passInput.classList.toggle("input-focus", hasText)
    })
}

updateInputVisualState()

emailInput.addEventListener("input", (e) => {
    const hasText = nameInput.value.trim().length !== 0
    // nameInputSvg.classList.toggle("input-focus", hasText);
    nameInput.classList.toggle("input-focus", hasText)
})

passInput.addEventListener("input", (e) => {
    const hasText = nameInput.value.trim().length !== 0
    // nameInputSvg.classList.toggle("input-focus", hasText);
    nameInput.classList.toggle("input-focus", hasText)
})

