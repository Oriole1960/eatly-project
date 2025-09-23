export class AddDishesCardToFavorite {
    constructor(getProducts, setProducts) {
        this.getProducts = getProducts
        this.setProducts = setProducts
        this.productsArray = this.getProducts()
        this.container2 = document.querySelector(".dishes__card--conteiner");
        this.favoriteRender = document.querySelectorAll(".favorite--icon");
    }



    addToFavoriteDishes() {
        for (let i = 0; i < 5; i++) {
            this.favoriteRender[i].classList.toggle('favorite--icon--active', this.productsArray[i].favorite);
        }

        this.container2.addEventListener('click', (e) => {
            // Исправляем селектор на реальный элемент, по которому кликаем
            const favoriteBtn = e.target.closest('.favorite--icon');
            if (!favoriteBtn) return;

            const cardElement = favoriteBtn.closest('.dishes__card');
            const cardId = Number(cardElement.dataset.id);
            const product = this.productsArray.find(p => p.id === cardId);
            if (!product) return;

            // Меняем объект напрямую
            product.favorite = !product.favorite;

            // Обновляем класс кнопки
            favoriteBtn.classList.toggle('favorite--icon--active', product.favorite);

            console.log('Текущее состояние (snapshot):', JSON.stringify(product));
            this.setProducts(this.productsArray)
        });

    }

}
