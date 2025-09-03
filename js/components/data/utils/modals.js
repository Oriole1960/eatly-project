const sighBtn = document.querySelector(".btn-sighup");
const sighModal = document.querySelector(".modal-validation__sighup");
const overLay = document.querySelector(".modal__overlay");
const body = document.querySelector("body");
const svgIcons = document.querySelectorAll(".sighup__form>label>svg");

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