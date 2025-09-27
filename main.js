let themeChangeBtn = document.querySelector('.themeChangeBtn')
let body = document.querySelector(`body`)
let searchInput = document.querySelector(`.searchInput`)
let bodyItem = document.querySelector(`.bodyItem`)

themeChangeBtn.addEventListener(`click`, () => {
    if (body.classList.contains(`night`)) {
        body.classList.remove(`night`)
        searchInput.classList.remove(`night`)
        bodyItem.classList.remove(`night`)
        themeChangeBtn.innerHTML = `<img src="./icons/Vector (26).svg" alt="">`
    } else {
        body.classList.add(`night`)
        searchInput.classList.add(`night`)
        bodyItem.classList.add(`night`)
        themeChangeBtn.innerHTML = `<img src="./icons/Vector (29).svg" alt="">`
    }
})

let notesStorage = JSON.parse(localStorage.getItem(`notes`)) || []


let notesObject = {
    noteText: 'lknsdfsdf',
    isChecked: true
}

notesStorage.push(notesObject)

localStorage.setItem(`notes`, JSON.stringify(notesStorage))


function renderNotesStorage() {
    let notesBoxElement = document.querySelector(`.notesBox`)

    let notesStorage = JSON.parse(localStorage.getItem(`notes`)) || []

    notesStorage.forEach(notes => {
        let checkedBtnElement = document.querySelector(`.checkedNote`)
        let noteDivElement = document.createElement(`div`)
        noteDivElement.classList = 'note'

        noteDivElement.innerHTML = `
        
        <div class="noteLeft">
                <button class="checkedNote"></button>
                <div class="noteColumnBox">
                <input class="noteItem" value="NOTE #${notesBoxElement.length}" type="text" disabled>
                <input class="noteText" value="${notes.noteText}" type="text" disabled>
                </div>
            </div>

            <div class="renamesBox">
                <button class="renameNote"><img src="./icons/Vector (28).svg" alt=""></button>
                <button class="deleteNote"><img src="./icons/trash-svgrepo-com 1.svg" alt=""></button>
            </div>

        `

        if (notes.isChecked) {
            checkedBtnElement.innerHTML = '<img src="./icons/Rectangle 18.svg" alt="haha">'
            checkedBtnElement.classList.add(`checked`)
        } else {
            checkedBtnElement.innerHTML = ``
        }
    });
}