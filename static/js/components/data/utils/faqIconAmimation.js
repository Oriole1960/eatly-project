export class FaqIconAnimation {
    constructor() {
        this.accordion = document.querySelector(".faq");

        this.accordionPanels = document.querySelectorAll(".accordion-container__panel");
    }

   switchAccordionPanel() {
       if (!this.accordion) return

        this.accordion.addEventListener("click", (event) => {
            const title = event.target.closest(".accordion-container__title")

            if (title) {
                const activeAccordionPanel = title.nextElementSibling
                
                if (activeAccordionPanel.classList.contains("open")) {
                    activeAccordionPanel.classList.remove("open")
                    title.classList.remove("open")
                    activeAccordionPanel.style.height = "0px";
                } else {
                    this.accordionPanels.forEach(panel => {
                        panel.style.height = "0px";
                        panel.classList.remove("open")
                        panel.previousElementSibling.classList.remove("open")
                    })
                    activeAccordionPanel.classList.add("open");
                    title.classList.add("open")
                    activeAccordionPanel.style.height = activeAccordionPanel.scrollHeight + "px";
                }
            }
        })
    }
}