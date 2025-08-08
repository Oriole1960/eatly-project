const products = [
    {
        title: "Chicken Hell",
        time: "24min",
        rating: 4.8,
        price: "12.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
    {
        title: "Swe Dish",
        time: "34min",
        rating: 4.9,
        price: "19.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
    {
        title: "Vegan Salad",
        time: "15min",
        rating: 4.7,
        price: "9.25",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
    {
        title: "Chicken Air",
        time: "26min",
        rating: 4.6,
        price: "12.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
    {
        title: "Pig Hell",
        time: "22min",
        rating: 4.9,
        price: "10.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
    {
        title: "Fish Smile",
        time: "24min",
        rating: 4.7,
        price: "19.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
    {
        title: "Super Chicken",
        time: "30min",
        rating: 4.8,
        price: "13.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
    {
        title: "Cow Deluxe",
        time: "45min",
        rating: 5.0,
        price: "45.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png"
    },
];


    const template = document.getElementById("dish-card-template");
    const container = document.querySelector(".dishes__card--conteiner");

const OneRowProduct = products.slice(0, 5)

OneRowProduct.forEach((product) => {
    const card = template.content.cloneNode(true);

    // изображение
    const img = card.querySelector(".dishes__card--img img");
    img.src = product.image;
    img.alt = product.title;
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

    container.append(card);

})