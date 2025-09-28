export const defaultProducts = [
    {
        id: 1,
        title: "Chicken Hell",
        restaurantId: 1,
        time: "24min",
        rating: 4.8,
        price: "12.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false,
        recommended: true,
        popular: true,
        filterCategories: ["pizza"]
    },
    {
        id: 2,
        title: "Chicken Air",
        restaurantId: 1,
        time: "26min",
        rating: 4.6,
        price: "12.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false,
        recommended: false,
        popular: false,
        filterCategories: ["pizza"]
    },
    {
        id: 3,
        title: "Super Chicken",
        restaurantId: 1,
        time: "30min",
        rating: 4.8,
        price: "13.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false,
        recommended: true,
        popular: true,
        filterCategories: ["pizza"]
    },

    // блюда для ресторана 2
    {
        id: 4,
        title: "Swe Dish",
        restaurantId: 2,
        time: "34min",
        rating: 4.9,
        price: "19.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false,
        recommended: false,
        popular: true,
        filterCategories: ["donat"]
    },
    {
        id: 5,
        title: "Cow Deluxe",
        restaurantId: 2,
        time: "45min",
        rating: 5.0,
        price: "12.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false,
        recommended: true,
        popular: true,
        filterCategories: ["donat"]
    },
    {
        id: 6,
        title: "Fish Smile",
        restaurantId: 2,
        time: "24min",
        rating: 4.7,
        price: "19.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false,
        recommended: false,
        popular: false,
        filterCategories: ["asian"]
    },

    // блюда для ресторана 3
    {
        id: 7,
        title: "Vegan Salad",
        restaurantId: 3,
        time: "15min",
        rating: 4.7,
        price: "9.25",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false,
        recommended: true,
        popular: false,
        filterCategories: ["asian"]
    },
    {
        id: 8,
        title: "Pig Hell",
        restaurantId: 3,
        time: "22min",
        rating: 4.9,
        price: "10.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false,
        recommended: true,
        popular: true,
        filterCategories: ["asian"]
    },
    {
        id: 9,
        title: "Taco Special",
        restaurantId: 3,
        time: "18min",
        rating: 4.6,
        price: "11.50",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false,
        recommended: false,
        popular: false,
        filterCategories: ["asian"]
    },

    // блюда для ресторана 4
    {
        id: 10,
        title: "Pizza Classic",
        restaurantId: 4,
        time: "30min",
        rating: 4.6,
        price: "14.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false,
        recommended: false,
        popular: true,
        filterCategories: ["pizza"]
    },
    {
        id: 11,
        title: "Pizza Supreme",
        restaurantId: 4,
        time: "35min",
        rating: 4.8,
        price: "16.50",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false,
        recommended: true,
        popular: true,
        filterCategories: ["pizza"]
    },
    {
        id: 12,
        title: "Pizza Pepperoni",
        restaurantId: 4,
        time: "32min",
        rating: 4.7,
        price: "15.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false,
        recommended: false,
        popular: false,
        filterCategories: ["pizza"]
    },

    // блюда для ресторана 5
    {
        id: 13,
        title: "Sushi Roll",
        restaurantId: 5,
        time: "20min",
        rating: 4.9,
        price: "12.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false,
        recommended: true,
        popular: true,
        filterCategories: ["asian"]
    },
    {
        id: 14,
        title: "Sushi Set",
        restaurantId: 5,
        time: "25min",
        rating: 4.8,
        price: "19.50",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false,
        recommended: true,
        popular: false,
        filterCategories: ["asian"]
    },
    {
        id: 15,
        title: "Sushi Deluxe",
        restaurantId: 5,
        time: "30min",
        rating: 5.0,
        price: "22.99",
        image: "static/assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false,
        recommended: true,
        popular: true,
        filterCategories: ["asian"]
    }
];

export const defaultRestaurants = [
    {
        id: 1,
        title: "The Chicken King",
        time: "24min",
        rating: 4.8,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Healthy",
        categories: ["Healthy", "pizza"],
        recommended: true,
        popular: true
    },
    {
        id: 2,
        title: "The Burger King",
        time: "34min",
        rating: 4.9,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Trending",
        categories: ["Trending", "donat"],
        recommended: false,
        popular: true
    },
    {
        id: 3,
        title: "Taco Palace",
        time: "20min",
        rating: 4.7,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Supreme",
        categories: ["Supreme", "asian"],
        recommended: true,
        popular: false
    },
    {
        id: 4,
        title: "Pizza Fortress",
        time: "30min",
        rating: 4.6,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Healthy",
        categories: ["Healthy", "pizza"],
        recommended: false,
        popular: false
    },
    {
        id: 5,
        title: "Sushi Castle",
        time: "22min",
        rating: 4.9,
        image: "static/assets/images/forCompanents/Restaurant__card__img.png",
        category: "Supreme",
        categories: ["Supreme", "asian"],
        recommended: true,
        popular: true
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



