
export class RestaurantCard {
    constructor(getRestaurants) {
        this.getRestaurants = getRestaurants

        this.categoriesMapRest = {
            Healthy: {text: "Healthy", class: "category--healthy--rest"},
            Trending: {text: "Trending", class: "category--trending--rest"},
            Supreme: {text: "Supreme", class: "category--supreme--rest"},
        };
        this.templateRest = document.getElementById("restaurant-card-template");
        this.duplicateRestCard = document.querySelector(".restaurants__card--conteiner");
        this.oneRowRestaurant = this.getRestaurants().slice(0, 3);
    }


    restaurantsCardRender() {

        this.oneRowRestaurant.forEach(restaurant => {
            const card = this.templateRest.content.cloneNode(true);

            const restImg = card.querySelector(".restaurants__card--img img");
            restImg.src = restaurant.image;
            restImg.alt = restaurant.title;

            const categoryConteiner = card.querySelector(".category--card--restaurant");
            const categoryRestaurant = this.categoriesMapRest[restaurant.category];
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
            this.duplicateRestCard.append(card);
        })
    }

}

