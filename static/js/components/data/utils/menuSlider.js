export class MenuSlider {
    constructor() {
        this.slide = document.querySelectorAll('.menu-slider__slide')
        this.sliderBtns = document.querySelectorAll('.menu-slider__buttons div');
        this.index = 0
    }

    #showSlide(i) {

        this.slide.forEach(element => {
            element.classList.remove('active')
        })
        this.slide[i].classList.add('active')

        this.sliderBtns.forEach(element => {
            element.classList.remove('active')
        })
        this.sliderBtns[i].classList.add('active')
    }

    #goToSlide() {
        this.sliderBtns.forEach((element, index) => {
            element.addEventListener('click', (e) => {
                this.#showSlide(index)
            })
        })
    }

    #nextSlide() {
        this.index = (this.index + 1) % this.slide.length
        this.#showSlide(this.index)
    }

    #autoScroll() {
        setInterval(() => {
            this.#nextSlide()
        }, 3000)
    }

    init() {
        this.#showSlide(this.index)
        this.#goToSlide()
        this.#autoScroll()
    }
}