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
const maxIndex = totalSlides - 2;
const step = (trackWidth) / totalSlides; // полный шаг для расчёта thumb

// Рассчёт ширины ползунка пропорционально числу карточек
const thumbWidth = Math.max(trackWidth / totalSlides, 30); // минимум 30px
sliderThumb.style.width = `${thumbWidth}px`;

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
    const thumbStep = (trackWidth - thumbWidth) / maxIndex;
    sliderThumb.style.transform = `translateX(${thumbStep * currentIndex}px)`;
};

// Клик по треку
sliderTrack.addEventListener('click', (e) => {
    if (e.target === sliderThumb) return;

    const clickX = e.offsetX - thumbWidth / 2;
    let relativeIndex = (clickX / (trackWidth - thumbWidth)) * maxIndex;
    const fraction = relativeIndex - Math.floor(relativeIndex);

    if (fraction >= 0.25 && fraction < 0.75) relativeIndex = Math.round(relativeIndex);
    else relativeIndex = Math.floor(relativeIndex + 0.5);

    updateSlider(relativeIndex);
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

    const thumbRect = sliderThumb.getBoundingClientRect();
    const trackRect = sliderTrack.getBoundingClientRect();
    let x = thumbRect.left - trackRect.left + thumbWidth / 2;

    let relativeIndex = (x / (trackWidth - thumbWidth)) * maxIndex;
    const fraction = relativeIndex - Math.floor(relativeIndex);

    if (fraction >= 0.25 && fraction < 0.75) relativeIndex = Math.round(relativeIndex);
    else relativeIndex = Math.floor(relativeIndex + 0.5);

    updateSlider(relativeIndex, true);
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

    const relativeIndex = (x / (trackWidth - thumbWidth)) * maxIndex;
    wrapper.style.transform = `translateX(-${cardWidth * relativeIndex}px)`;
});

// Инициализация
updateSlider(0, true);