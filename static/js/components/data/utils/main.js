import { DishesCard } from './renderDishesCard.js'
import { RestaurantCard } from './renderRestaurantsCard.js'
import { Storage, defaultProducts } from './storage.js'
import { AnimationDashWidget } from './dropdownAnimation.js';
import { SliderReviews} from './scrollRewiews.js';
import { AddDishesCardToFavorite } from './favoriteCardBtn.js';


const animationDashWidget = new AnimationDashWidget()
animationDashWidget.allWidgetAnimation()



const storage = new Storage(defaultProducts)
storage.saveInStorage()
const getDishesArrFromLocalStorage = storage.getDishesArrFromLocalStorage.bind(storage)
const saveDishesArrInLocalStorage = storage.setProductsInLocalStorage.bind(storage)
const getRestaurantsFromLocalStorage = storage.getRestaurantsFromLocalStorage.bind(storage)



// НУЖНО ЗАПУСКАТЬ МЕТОД ЧТОБЫ ВЕРНУТЬ ИЗМЕНЁННЫЙ МАССИВ В ЛОКАЛ СТОРЕЙДЖ ПО ИТОГУ РАБОТЫ РЕНДЕРА
const restaurantCard = new RestaurantCard( getRestaurantsFromLocalStorage )
restaurantCard.restaurantsCardRender()



const dishesCard = new DishesCard( defaultProducts )
dishesCard.dishesCardRender()



const sliderReviews = new SliderReviews()
sliderReviews.init()


// Здесь также требуется методы из сторейдж, получить массив из локал и отдать
const addDishesCardToFavorite = new AddDishesCardToFavorite(getDishesArrFromLocalStorage, saveDishesArrInLocalStorage)
addDishesCardToFavorite.addToFavoriteDishes()






