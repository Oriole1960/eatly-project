export class AnimationDashWidget {

    constructor() {
        this.dropBtn = document.getElementById("dropdown--btn")
        this.dropMenu = document.querySelector(".dashboard__dropdown--menu")
        this.textBtn = document.querySelector(".dropdown--btn--style span")
        this.dropArrowIcon = document.getElementById("dropdown--arrow")
        this.fillExpenseWidth = document.getElementById("expense--chart--fill")
        this.fillVocherWidth = document.getElementById("vocher--chart--fill")
        this.widgetExpensePrice = document.querySelector(".widget__expense--price")
        this.widgetVocherPrice = document.querySelector(".widget__vocher--price")

        this.#renderDropMenu()
    }

    #renderDropMenu() {
        this.dropMenu.querySelectorAll('button').forEach(item => {
            item.style.display = item.dataset.value.trim() === this.textBtn.textContent.trim() ? 'none' : 'block'
        })
    }

    #renderWidgetContent() {
        switch (this.textBtn.textContent) {

            case 'This week':
                this.fillExpenseWidth.classList.add('width--week')
                this.fillExpenseWidth.classList.remove('width--today')
                this.widgetExpensePrice.textContent = '$163.06'

                this.fillVocherWidth.classList.add('width--week')
                this.fillVocherWidth.classList.remove('width--today')
                this.widgetVocherPrice.textContent = '$18.31'
                break

            case 'Today':
                this.fillExpenseWidth.classList.add('width--today')
                this.fillExpenseWidth.classList.remove('width--week')
                this.widgetExpensePrice.textContent = '$40.09'

                this.fillVocherWidth.classList.add('width--today')
                this.fillVocherWidth.classList.remove('width--week')
                this.widgetVocherPrice.textContent = '$4.07'
                break

            default:
                this.fillExpenseWidth.classList.remove('width--week')
                this.fillExpenseWidth.classList.remove('width--today')
                this.widgetExpensePrice.textContent = '$409.00'

                this.fillVocherWidth.classList.remove('width--week')
                this.fillVocherWidth.classList.remove('width--today')
                this.widgetVocherPrice.textContent = '$45.78'
        }
    }


    #dropDownAnimation() {
        this.dropBtn.addEventListener("click", () => {
            this.dropMenu.classList.toggle("active--dropdown")
            this.dropArrowIcon.classList.toggle("active--dropdown--arrow")
        })
    }

    allWidgetAnimation() {
        this.dropMenu.querySelectorAll('button').forEach(item => {
            item.addEventListener('click', () => {

                this.textBtn.textContent = item.dataset.value
                this.dropMenu.classList.remove("active--dropdown")
                this.dropArrowIcon.classList.remove("active--dropdown--arrow")
                this.#dropDownAnimation()
                this.#renderWidgetContent()
            })
        })
    }
}

