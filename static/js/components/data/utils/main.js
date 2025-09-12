import { DishesCard } from './renderDishesCard.js'
import { RestaurantCard } from './renderRestaurantCard.js'
import { Storage, defaultProducts } from './storage.js'
import { AnimationDashWidget } from "./dropdownAnimation";
import { SliderReviews} from "./scrollRewiews";
import { AddDishesCardToFavorite } from "./favoriteCardBtn";


const dishesCard = new DishesCard( dishesArr )
dishesCard.dishesCardRender()


// НУЖНО ЗАПУСКАТЬ МЕТОД ЧТОБЫ ВЕРНУТЬ ИЗМЕНЁННЫЙ МАССИВ В ЛОКАЛ СТОРЕЙДЖ ПО ИТОГУ РАБОТЫ РЕНДЕРА
const restaurantCard = new RestaurantCard()
restaurantCard.restaurantsCardRender()



const storage = new Storage(defaultProducts)
storage.saveInStorage()
const dishesArr = storage.getDishesArrFromLocalStorage()



const animationDashWidget = new AnimationDashWidget()
animationDashWidget.allWidgetAnimation()



const sliderReviews = new SliderReviews()
sliderReviews.init()


// Здесь также требуется методы из сторейдж, получить массив из локал и отдать
const addDishesCardToFavorite = new AddDishesCardToFavorite()
addDishesCardToFavorite.addToFavoriteDishes()