

export class  SliderReviews {
    constructor() {
        this.sliderTrack = document.querySelector('.slider--track');
        this.sliderThumb = document.querySelector('.slider--thumb');
        this.wrapper = document.querySelector('.reviews--container__card--swapper');

        if (!this.wrapper) return

        this.cards = Array.from(this.wrapper.querySelectorAll('.reviews--container__card'));
        this.totalSlides = this.cards.length;
        this.cardStyle = getComputedStyle(this.cards[0]);
        this.cardMargin = parseInt(this.cardStyle.marginRight);
        this.cardWidth = this.cards[0].offsetWidth + this.cardMargin;
        this.currentIndex = 0;
        this.trackWidth = this.sliderTrack.offsetWidth;
        this.maxIndex = this.totalSlides - 2;
        this.step = (this.trackWidth) / this.totalSlides; // полный шаг для расчёта thumb
// Рассчёт ширины ползунка пропорционально числу карточек
        this.thumbWidth = Math.max(this.trackWidth / this.totalSlides, 30); // минимум 30px
        this.sliderThumb.style.width = `${this.thumbWidth}px`;
        this.isDragging = false;
    }

    updateSlider(index, animate = true) {
        this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));

        if (animate) {
            this.wrapper.style.transition = 'transform 0.3s ease';
            this.sliderThumb.style.transition = 'transform 0.3s ease';
        } else {
            this.wrapper.style.transition = 'none';
            this.sliderThumb.style.transition = 'none';
        }

        this.wrapper.style.transform = `translateX(-${this.cardWidth * this.currentIndex}px)`;
        const thumbStep = (this.trackWidth - this.thumbWidth) / this.maxIndex;
        this.sliderThumb.style.transform = `translateX(${thumbStep * this.currentIndex}px)`;
    };

    jumpSliderToClick() {
        this.sliderTrack.addEventListener('click', (e) => {
            if (e.target === this.sliderThumb) return;

            const clickX = e.offsetX - this.thumbWidth / 2;
            let relativeIndex = (clickX / (this.trackWidth - this.thumbWidth)) * this.maxIndex;
            const fraction = relativeIndex - Math.floor(relativeIndex);

            if (fraction >= 0.25 && fraction < 0.75) relativeIndex = Math.round(relativeIndex);
            else relativeIndex = Math.floor(relativeIndex + 0.5);

            this.updateSlider(relativeIndex);
        });
    }

// Перетаскивание ползунка
    handleSliderDrag() {
        this.sliderThumb.addEventListener('mousedown', () => {
            this.isDragging = true;
            this.sliderThumb.style.cursor = 'grabbing';
        });
    }

    lockThumbPosition() {
        document.addEventListener('mouseup', () => {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.sliderThumb.style.cursor = 'grab';

            const thumbRect = this.sliderThumb.getBoundingClientRect();
            const trackRect = this.sliderTrack.getBoundingClientRect();
            let x = thumbRect.left - trackRect.left + this.thumbWidth / 2;

            let relativeIndex = (x / (this.trackWidth - this.thumbWidth)) * this.maxIndex;
            const fraction = relativeIndex - Math.floor(relativeIndex);

            if (fraction >= 0.25 && fraction < 0.75) relativeIndex = Math.round(relativeIndex);
            else relativeIndex = Math.floor(relativeIndex + 0.5);

            this.updateSlider(relativeIndex, true);
        });

    }

    moveSliderDrag() {
        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;

            const rect = this.sliderTrack.getBoundingClientRect();
            let x = e.clientX - rect.left - this.thumbWidth / 2;

            if (x < 0) x = 0;
            if (x > this.trackWidth - this.thumbWidth) x = this.trackWidth - this.thumbWidth;

            this.sliderThumb.style.transition = 'none';
            this.wrapper.style.transition = 'none';

            this.sliderThumb.style.transform = `translateX(${x}px)`;

            const relativeIndex = (x / (this.trackWidth - this.thumbWidth)) * this.maxIndex;
            this.wrapper.style.transform = `translateX(-${this.cardWidth * relativeIndex}px)`;
        });
    }

    init() {
        if (!this.wrapper) return

        document.addEventListener('DOMContentLoaded', () => {
            this.updateSlider(0, true);
            this.jumpSliderToClick()
            this.handleSliderDrag()
            this.lockThumbPosition()
            this.moveSliderDrag()
        });
    }
}

// Инициализация
