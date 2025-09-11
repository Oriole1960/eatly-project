import { DishesCard } from './renderDishesCard.js'
import { RestaurantCard } from './renderRestaurantCard.js'
import { Storage, defaultProducts } from './storage.js'



const dishesCard = new DishesCard( dishesArr )

dishesCard.dishesCardRender()


// НУЖНО ЗАПУСКАТЬ МЕТОД ЧТОБЫ ВЕРНУТЬ ИЗМЕНЁННЫЙ МАССИВ В ЛОКАЛ СТОРЕЙДЖ ПО ИТОГУ РАБОТЫ РЕНДЕРА
const restaurantCard = new RestaurantCard()

restaurantCard.restaurantsCardRender()



const storage = new Storage(defaultProducts)

storage.saveInStorage()
const dishesArr = storage.getDishesArrFromLocalStorage()