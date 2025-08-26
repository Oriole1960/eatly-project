const sliderTrack = document.querySelector('.slider--track');
const sliderThumb = document.querySelector('.slider--thumb');
const wrapper = document.querySelector('.reviews--container__card--swapper');
const cards = Array.from(wrapper.querySelectorAll('.reviews--container__card'));

const totalSlides = cards.length;
const cardStyle = getComputedStyle(cards[0]);
const cardMargin = parseInt(cardStyle.marginRight);
const cardWidth = cards[0].offsetWidth + cardMargin;

let currentIndex = 0;
const trackWidth = sliderTrack.offsetWidth;
const thumbWidth = sliderThumb.offsetWidth;
const maxIndex = totalSlides - 1;
const step = (trackWidth - thumbWidth) / maxIndex;

let isDragging = false;

const updateSlider = (index, animate = true) => {
    currentIndex = Math.max(0, Math.min(index, maxIndex));

    if (animate) {
        wrapper.style.transition = 'transform 0.3s ease';
        sliderThumb.style.transition = 'transform 0.3s ease';
    } else {
        wrapper.style.transition = 'none';
        sliderThumb.style.transition = 'none';
    }

    wrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    sliderThumb.style.transform = `translateX(${step * currentIndex}px)`;
};

// Клик по треку
sliderTrack.addEventListener('click', (e) => {
    const clickX = e.offsetX - thumbWidth / 2;
    const newIndex = Math.round(clickX / step);
    updateSlider(newIndex);
});

// Перетаскивание ползунка
sliderThumb.addEventListener('mousedown', () => {
    isDragging = true;
    sliderThumb.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    sliderThumb.style.cursor = 'grab';

    // Привязка к ближайшему шагу
    const thumbRect = sliderThumb.getBoundingClientRect();
    const trackRect = sliderTrack.getBoundingClientRect();
    let x = thumbRect.left - trackRect.left + thumbWidth / 2;
    const newIndex = Math.round(x / step);
    updateSlider(newIndex, true);
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const rect = sliderTrack.getBoundingClientRect();
    let x = e.clientX - rect.left - thumbWidth / 2;

    if (x < 0) x = 0;
    if (x > trackWidth - thumbWidth) x = trackWidth - thumbWidth;

    sliderThumb.style.transition = 'none';
    wrapper.style.transition = 'none';

    sliderThumb.style.transform = `translateX(${x}px)`;

    // Пропорционально двигаем карточки
    const relativeIndex = (x / (trackWidth - thumbWidth)) * maxIndex;
    wrapper.style.transform = `translateX(-${cardWidth * relativeIndex}px)`;
});

// Инициализация
updateSlider(0, true);