const defaultProducts = [
    {
        id: 1,
        title: "Chicken Hell",
        time: "24min",
        rating: 4.8,
        price: "12.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false
    },
    {
        id: 2,
        title: "Swe Dish",
        time: "34min",
        rating: 4.9,
        price: "19.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false
    },
    {
        id: 3,
        title: "Vegan Salad",
        time: "15min",
        rating: 4.7,
        price: "9.25",
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false
    },
    {
        id: 4,
        title: "Chicken Air",
        time: "26min",
        rating: 4.6,
        price: "12.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false
    },
    {
        id: 5,
        title: "Pig Hell",
        time: "22min",
        rating: 4.9,
        price: "10.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Supreme",
        favorite: false
    },
    {
        id: 6,
        title: "Fish Smile",
        time: "24min",
        rating: 4.7,
        price: "19.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false
    },
    {
        id: 7,
        title: "Super Chicken",
        time: "30min",
        rating: 4.8,
        price: "13.99",
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Healthy",
        favorite: false
    },
    {
        id: 8,
        title: "Cow Deluxe",
        time: "45min",
        rating: 5.0,
        image: "./assets/images/forCompanents/card__chiken-hell.png",
        category: "Trending",
        favorite: false
    },
];

const STORAGE_KEY = 'products'

let products = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (!products) {
    products = defaultProducts
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

export const setProducts = (arrayProducts) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrayProducts));
}

export const getProducts = () => {
    const productsJSON = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(productsJSON);
}