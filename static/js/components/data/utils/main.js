import { DishesCard } from './renderDishesCard.js'
import { RestaurantCard } from './renderRestaurantsCard.js'
import { Storage, defaultProducts } from './storage.js'
import { AnimationDashWidget } from './dropdownAnimation.js';
import { SliderReviews} from './scrollRewiews.js';
import { AddDishesCardToFavorite } from './favoriteCardBtn.js';
import { Modals } from './modals.js';
import { FaqIconAnimation } from "./faqIconAmimation.js";
import { MenuSlider } from './menuSlider.js';
import { CardFilter } from './cardFilter.js';
import { FormValidation} from './formsValidation.js';


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



const dishesCard = new DishesCard( getDishesArrFromLocalStorage )
dishesCard.dishesCardRender()



const sliderReviews = new SliderReviews()
sliderReviews.init()


// Здесь также требуется методы из сторейдж, получить массив из локал и отдать
const addDishesCardToFavorite = new AddDishesCardToFavorite(getDishesArrFromLocalStorage, saveDishesArrInLocalStorage)
addDishesCardToFavorite.addToFavoriteDishes()



const modals = new Modals()
modals.init()



const faqAnimation = new FaqIconAnimation()
faqAnimation.switchAccordionPanel()



const menuSlider = new MenuSlider()
menuSlider.init()



const cardFilter = new CardFilter()
cardFilter.init()



new FormValidation()






