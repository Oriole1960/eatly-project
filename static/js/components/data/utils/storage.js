export const defaultProducts = [
    {
        id: 1,
        title: "Chicken Hell",
        time: "24min",
        rating: 4.8,
        price: "12.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false
    },
    {
        id: 2,
        title: "Swe Dish",
        time: "34min",
        rating: 4.9,
        price: "19.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false
    },
    {
        id: 3,
        title: "Vegan Salad",
        time: "15min",
        rating: 4.7,
        price: "9.25",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false
    },
    {
        id: 4,
        title: "Chicken Air",
        time: "26min",
        rating: 4.6,
        price: "12.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false
    },
    {
        id: 5,
        title: "Pig Hell",
        time: "22min",
        rating: 4.9,
        price: "10.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false
    },
    {
        id: 6,
        title: "Fish Smile",
        time: "24min",
        rating: 4.7,
        price: "19.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false
    },
    {
        id: 7,
        title: "Super Chicken",
        time: "30min",
        rating: 4.8,
        price: "13.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false
    },
    {
        id: 8,
        title: "Cow Deluxe",
        time: "45min",
        rating: 5.0,
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false
    },
];

export const defaultRestaurants = [
    {
        title: "The Chicken King",
        time: "24min",
        rating: 4.8,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Healthy"
    },
    {
        title: "The Burger King",
        time: "34min",
        rating: 4.9,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Trending"
    },
    {
        title: "Taco Palace",
        time: "20min",
        rating: 4.7,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Supreme"
    },
    {
        title: "Pizza Fortress",
        time: "30min",
        rating: 4.6,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Healthy"
    },
    {
        title: "Sushi Castle",
        time: "22min",
        rating: 4.9,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Supreme"
    },
];

export class Storage {
    constructor() {
        this.DISH_STORAGE_KEY = 'products'
        this.REST_STORAGE_KEY = 'restaurants'
        this.products = JSON.parse(localStorage.getItem(this.DISH_STORAGE_KEY));
        this.restaurants = JSON.parse(localStorage.getItem(this.REST_STORAGE_KEY));
        this.defaultRestaurants = defaultRestaurants
        this.defaultProducts = defaultProducts;


    }

    saveInStorage() {
        if (!this.products) {
            this.products = this.defaultProducts
            localStorage.setItem(this.DISH_STORAGE_KEY, JSON.stringify(this.products))
        }

        if (!this.restaurants) {
            this.restaurants = this.defaultRestaurants
            localStorage.setItem(this.REST_STORAGE_KEY, JSON.stringify(this.restaurants))
        }
    }

    setProductsInLocalStorage(arrayProducts) {
        localStorage.setItem(this.DISH_STORAGE_KEY, JSON.stringify(arrayProducts))
    }

    setRestaurantsInLocalStorage(arrayRestaurants) {
        localStorage.setItem(this.REST_STORAGE_KEY, JSON.stringify(arrayRestaurants))
    }

    getDishesArrFromLocalStorage() {
        const productsJSON = localStorage.getItem(this.DISH_STORAGE_KEY);
        return JSON.parse(productsJSON);
    }

    getRestaurantsFromLocalStorage() {
        const restaurantsJSON = localStorage.getItem(this.REST_STORAGE_KEY);
        return JSON.parse(restaurantsJSON);
    }
}

