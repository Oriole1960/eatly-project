export class CardFilter {
    constructor() {
        this.filterContainer = document.querySelector(".menu-widget");
        this.categoryButtons = document.querySelectorAll(".menu-widget__categories-btn button");
        this.sliderTrack = document.querySelector(".menu-widget__track");
        this.sliderThumbMin = document.querySelector(".menu-widget__thumb-min");
        this.sliderThumbMax = document.querySelector(".menu-widget__thumb-max");
        this.sliderFill = document.querySelector(".menu-widget__fill");

        this.priceLabelContainer     = document.querySelector(".menu-widget__price-label");

        this.minPriceLabel = document.getElementById("minPrice")
        this.maxPriceLabel = document.getElementById("maxPrice")

        this.minPos = 0
        this.maxPos = 100
        this.minDistance = 2
        this.minCost = 0
        this.maxCost = 1000
        this.activeThumb = null

        this.onPointerDown = this.onPointerDown.bind(this);
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);

        this.filterValues = {
            category: null,
            fastDelivery: false,
            recommended: false,
            popular: false,
            price: [0, 1000]
        }
    }

    addListenerToButtons() {
        this.filterContainer.addEventListener('click', event => {
            const categoryBtn = event.target.closest("button[data-category]");
            const sortBtn = event.target.closest("button[data-sort]");

            if (categoryBtn) {
                this.categoryButtons.forEach((button) => {
                    button.classList.remove("active")
                })
                categoryBtn.classList.add("active");
                const categoryDataAttribute = categoryBtn.dataset.category
                this.filterValues.category = (this.filterValues.category === categoryDataAttribute) ? null : categoryDataAttribute;

            } else if (sortBtn) {
                sortBtn.classList.toggle("active");
                const sortDataAttribute = sortBtn.dataset.sort
                this.filterValues[sortDataAttribute] = !this.filterValues[sortDataAttribute]
            }
            console.log(this.filterValues)
        })
    }



    updateSlider(percent, thumb) {
        let newPos = Math.min(Math.max(0, percent), 100);

        if (thumb === this.sliderThumbMin) {
            newPos = (Math.min(newPos, this.maxPos - this.minDistance));
            this.minPos = newPos;
        } else if (thumb === this.sliderThumbMax) {
            newPos = (Math.max(newPos, this.minPos + this.minDistance));
            this.maxPos = newPos;
        }

        thumb.style.left = `${newPos}%`;
        this.sliderFill.style.left = `${this.minPos}%`;
        this.sliderFill.style.width = `${this.maxPos - this.minPos}%`;

    }

    onPointerDown(event) {
        if (event.target !== this.sliderThumbMin && event.target !== this.sliderThumbMax) return
        this.activeThumb = event.target
        this.activeThumb.setPointerCapture(event.pointerId)
        document.addEventListener("pointermove", this.onPointerMove)
        document.addEventListener("pointerup", this.onPointerUp)

    }

    onPointerMove(event) {
        if (!this.activeThumb) return;

        const trackRect = this.sliderTrack.getBoundingClientRect();
        const positionInPix = event.clientX - trackRect.left;
        const percent = (positionInPix / trackRect.width) * 100;
        this.percentToPrice()
        this.updateSlider(percent, this.activeThumb);
    }

    onPointerUp(event) {
        if (!this.activeThumb) return;
        this.activeThumb.releasePointerCapture(event.pointerId);

        document.removeEventListener('pointermove', this.onPointerMove);
        document.removeEventListener('pointerup', this.onPointerUp);
        this.activeThumb = null;
    }

    percentToPrice() {
        this.minCost = Math.round(1000 * this.minPos / 100)
        this.minPriceLabel.textContent = `${this.minCost}`
        this.filterValues.price[0] = this.minCost
        this.maxCost = Math.round(1000 * this.maxPos / 100)
        this.maxPriceLabel.textContent = `${this.maxCost} $`
        this.filterValues.price[1] = this.maxCost
        this.priceLabelContainer.classList.add("active")
    }

    addListeners() {
        this.sliderThumbMin.addEventListener('pointerdown', this.onPointerDown);
        this.sliderThumbMax.addEventListener('pointerdown', this.onPointerDown);
    }


    init() {
        if (!this.filterContainer)
        this.addListeners()
        this.updateSlider(this.minPos, this.sliderThumbMin);
        this.updateSlider(this.maxPos, this.sliderThumbMax);
        this.sliderFill.style.left = `${this.minPos}%`;
        this.sliderFill.style.width = `${this.maxPos - this.minPos}%`;
        this.addListenerToButtons()
    }
}