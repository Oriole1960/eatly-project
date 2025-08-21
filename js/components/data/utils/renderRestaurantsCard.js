const restaurants = [
    {
        title: "The Chicken King",
        time: "24min",
        rating: 4.8,
        image: "./assets/images/forCompanents/Restaurant__card__img.png",
        category: "Healthy"
    },
    {
        title: "The Burger King",
        time: "34min",
        rating: 4.9,
        image: "./assets/images/forCompanents/Restaurant__card__img.png",
        category: "Trending"
    },
    {
        title: "Taco Palace",
        time: "20min",
        rating: 4.7,
        image: "./assets/images/forCompanents/Restaurant__card__img.png",
        category: "Supreme"
    },
    {
        title: "Pizza Fortress",
        time: "30min",
        rating: 4.6,
        image: "./assets/images/forCompanents/Restaurant__card__img.png",
        category: "Healthy"
    },
    {
        title: "Sushi Castle",
        time: "22min",
        rating: 4.9,
        image: "./assets/images/forCompanents/Restaurant__card__img.png",
        category: "Supreme"
    },
];

const categoriesMapRest = {
    Healthy: {text: "Healthy", class: "category--healthy--rest"},
    Trending: {text: "Trending", class: "category--trending--rest"},
    Supreme: {text: "Supreme", class: "category--supreme--rest"},
};


const templateRest = document.getElementById("restaurant-card-template");
const duplicateRestCard = document.querySelector(".restaurants__card--conteiner");

const oneRowRestaurant = restaurants.slice(0, 3);


oneRowRestaurant.forEach(restaurant => {
    const card = templateRest.content.cloneNode(true);


    const restImg = card.querySelector(".restaurants__card--img img");
    restImg.src = restaurant.image;
    restImg.alt = restaurant.title;


    const categoryConteiner = card.querySelector(".category--card--restaurant");
    const categoryRestaurant = categoriesMapRest[restaurant.category];
    if (categoryRestaurant) {
        categoryConteiner.textContent = restaurant.category;
        categoryConteiner.classList.add(categoryRestaurant.class);
    }


    const restaurantTitle = card.querySelector(".card--text__info > p");
    restaurantTitle.textContent = restaurant.title;


    const restaurantTime = card.querySelector(".info__price--rating p:first-of-type");
    restaurantTime.textContent = restaurant.time;

    const restaurantRating = card.querySelector(".info__price--rating p:last-of-type");
    restaurantRating.textContent = restaurant.rating;


    duplicateRestCard.append(card);
})

