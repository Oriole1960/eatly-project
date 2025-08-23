const dropBtn = document.getElementById("dropdown--btn")
const dropMenu = document.querySelector(".dashboard__dropdown--menu")
const dropConteiner = document.querySelector(".dropdown--container")
const textBtn = document.querySelector(".dropdown--btn--style span")
const dropArrow = document.getElementById("dropdown--arrow")

const fillExpenseWidth = document.getElementById("expense--chart--fill")
const fillVocherWidth = document.getElementById("vocher--chart--fill")

const widgetExpensePrice = document.querySelector(".widget__expense--price")
const widgetVocherPrice = document.querySelector(".widget__vocher--price")





function renderDropMenu()
{
    dropMenu.querySelectorAll('button').forEach(item => {
        item.style.display = item.dataset.value.trim() === textBtn.textContent.trim() ? 'none' : 'block'
    })
}

function renderExpenseWidget() {
    switch (true) {

        case textBtn.textContent === 'This week':
            fillExpenseWidth.classList.add('width--week')
            fillExpenseWidth.classList.remove('width--today')
            widgetExpensePrice.textContent = '$163.06'
            break

        case textBtn.textContent === 'Today':
            fillExpenseWidth.classList.add('width--today')
            fillExpenseWidth.classList.remove('width--week')
            widgetExpensePrice.textContent = '$40.09'
            break

        default:
            fillExpenseWidth.classList.remove('width--week')
            fillExpenseWidth.classList.remove('width--today')
            widgetExpensePrice.textContent = '$409.00'
    }
}

function renderVocherWidget() {
    switch (true) {

        case textBtn.textContent === 'This week':
            fillVocherWidth.classList.add('width--week')
            fillVocherWidth.classList.remove('width--today')
            widgetVocherPrice.textContent = '$18.31'
            break
        case textBtn.textContent === 'Today':
            fillVocherWidth.classList.add('width--today')
            fillVocherWidth.classList.remove('width--week')
            widgetVocherPrice.textContent = '$4.07'
            break
        default:
            fillVocherWidth.classList.remove('width--week')
            fillVocherWidth.classList.remove('width--today')
            widgetVocherPrice.textContent = '$45.78'
    }
}



dropBtn.addEventListener("click", () => {
    dropMenu.classList.toggle("active--dropdown")
    dropArrow.classList.toggle("active--dropdown--arrow")
})


dropMenu.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', () => {

        textBtn.textContent = item.dataset.value
        dropMenu.classList.remove("active--dropdown")
        dropArrow.classList.remove("active--dropdown--arrow")
        renderVocherWidget()
        renderExpenseWidget()
        renderDropMenu()
    })

})

renderDropMenu()
