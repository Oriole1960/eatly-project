// import { getProducts } from './storage.js'
//
// const products = getProducts()

// Справочник/
// const categoriesMap = {
//     Healthy: {text: "Healthy", class: "category--healthy"},
//     Trending: {text: "Trending", class: "category--trending"},
//     Supreme: {text: "Supreme", class: "category--supreme"},
// };
// const template = document.getElementById("dish-card-template");
// const container = document.querySelector(".dishes__card--conteiner");
//
// //  Ограничение на загрузку в grid 5-ти карточек
// const OneRowProduct = products.slice(0, 5)
//
//
//
// // Рендер карточек
// OneRowProduct.forEach((product) => {
//     const card = template.content.cloneNode(true);
//
//     // id для добавления в избарнное
//     const dishesCard = card.querySelector(".dishes__card");
//     dishesCard.dataset.id = product.id
//
//     // Кнопка избранное, состояние
//     const iconFavorite = card.querySelector(".favorite--icon");
//     iconFavorite.classList.toggle("favorite--icon--active", product.favorite)
//
//     // изображение
//     const img = card.querySelector(".dishes__card--img img");
//     img.src = product.image;
//     img.alt = product.title;
//
//     // Категория
//
//     const categoryConteiner = card.querySelector(".category--card--dishes");
//     const category = categoriesMap[product.category];
//     if (category) {
//         categoryConteiner.textContent = category.text;
//         categoryConteiner.classList.add(category.class);
//     }
//
//     // название
//     const title = card.querySelector(".dishes__card--text > p");
//     title.textContent = product.title;
//     // время и рейтинг
//
//     const infoDiv = card.querySelector(".dishes__card--text > div");
//     infoDiv.innerHTML = `
//     <p>${product.time} •</p>
//     <img src="./assets/images/forCompanents/star__for__card__rating.png" alt="star">
//     <p>${product.rating}</p>
//     `
//     // цена
//     const priceDiv = card.querySelector(".dishes__card--price > p");
//     const [dollars, cents] = product.price.split(".");
//     priceDiv.innerHTML = `
//     $${dollars}.<span>${cents}</span>
//     `;
//
//     container.append(card);
// })

export class DishesCard {

    constructor(products) {
        this.products = products
        this.template = document.getElementById("dish-card-template");
        this.container = document.querySelector(".dishes__card--conteiner");
        this.OneRowProduct = this.products().slice(0, 5)
        this.categoriesMap = {
            Healthy: {text: "Healthy", class: "category--healthy"},
            Trending: {text: "Trending", class: "category--trending"},
            Supreme: {text: "Supreme", class: "category--supreme"},
        };
    }

    dishesCardRender() {
        this.OneRowProduct.forEach((product) => {
            const card = this.template.content.cloneNode(true);

            // id для добавления в избарнное
            const dishesCard = card.querySelector(".dishes__card");
            dishesCard.dataset.id = product.id

            // Кнопка избранное, состояние
            const iconFavorite = card.querySelector(".favorite--icon");
            iconFavorite.classList.toggle("favorite--icon--active", product.favorite)

            // изображение
            const img = card.querySelector(".dishes__card--img img");
            img.src = product.image;
            img.alt = product.title;

            // Категория

            const categoryContainer = card.querySelector(".category--card--dishes");
            const category = this.categoriesMap[product.category];
            if (category) {
                categoryContainer.textContent = category.text;
                categoryContainer.classList.add(category[product.category].class);
            }

            // название
            const title = card.querySelector(".dishes__card--text > p");
            title.textContent = product.title;
            // время и рейтинг

            const infoDiv = card.querySelector(".dishes__card--text > div");
            infoDiv.innerHTML = `
    <p>${product.time} •</p>
    <img src="./assets/images/forCompanents/star__for__card__rating.png" alt="star">
    <p>${product.rating}</p>
    `
            // цена
            const priceDiv = card.querySelector(".dishes__card--price > p");
            const [dollars, cents] = product.price.split(".");
            priceDiv.innerHTML = `
    $${dollars}.<span>${cents}</span>
    `;

            this.container.append(card);
        })
    }
}