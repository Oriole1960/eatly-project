import {setProducts, getProducts} from './storage.js'

const products = getProducts()

const container2 = document.querySelector(".dishes__card--conteiner");

container2.addEventListener('click', (e) => {
    // Исправляем селектор на реальный элемент, по которому кликаем
    const favoriteBtn = e.target.closest('.favorite--icon');
    if (!favoriteBtn) return;

    const cardElement = favoriteBtn.closest('.dishes__card');
    const cardId = Number(cardElement.dataset.id);

    const product = products.find(p => p.id === cardId);
    if (!product) return;

    // Меняем объект напрямую
    product.favorite = !product.favorite;

    // Обновляем класс кнопки
    favoriteBtn.classList.toggle('favorite--icon--active', product.favorite);

    console.log('Текущее состояние (snapshot):', JSON.stringify(product));

    setProducts(products)
});