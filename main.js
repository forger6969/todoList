let notesLocalStorage = JSON.parse(localStorage.getItem(`notes`)) || []
let notesBoxElement = document.querySelector('.notesBox')
console.log(notesLocalStorage);
if (notesLocalStorage.length === 0) {
    notesBoxElement.innerHTML = `<p class="notesNoneText">Вы еще не создали заметки</p>`
}

function changeTheme() {

    let themeChangeElement = document.querySelector(`.themeChangeBtn`)
    let searchInputElement = document.querySelector(`.searchInput`)
    let bodyElement = document.querySelector('body')
    let bodyItemElement = document.querySelector(`.bodyItem`)
    let noteText = document.querySelectorAll(`.noteText`)
    console.log(noteText);

    themeChangeElement.addEventListener(`click`, () => {
        if (bodyElement.classList.contains(`night`)) {
            searchInputElement.classList.remove(`night`)
            bodyElement.classList.remove(`night`)
            bodyItemElement.classList.remove(`night`)
            noteText.forEach(text => { text.classList.remove(`night`) })

            themeChangeElement.innerHTML = `<img src="./icons/Vector (26).svg" alt="">`
        } else {
            searchInputElement.classList.add(`night`)
            bodyElement.classList.add(`night`)
            bodyItemElement.classList.add(`night`)
            noteText.forEach(text => { text.classList.add(`night`) })

            themeChangeElement.innerHTML = `<img src="./icons/Vector (29).svg" alt="">`
        }
    })

}


function renderNotesElements() {
    notesBoxElement.innerHTML = ``
    let notesLocalStorage = JSON.parse(localStorage.getItem(`notes`)) || []

    notesLocalStorage.forEach((notes, index) => {

        let noteElement = document.createElement(`div`)
        noteElement.classList = `note`
        noteElement.innerHTML = `
                    <div class="noteLeft">
                            <input class="checkedNote" data-index="${index}" type="checkbox">
                        <input class="noteText" value="${notes.note}" type="text" disabled>
                    </div>
let notesLocalStorage = JSON.parse(localStorage.getItem(`notes`)) || []
let notesBoxElement = document.querySelector('.notesBox')
console.log(notesLocalStorage);
if (notesLocalStorage.length === 0) {
    notesBoxElement.innerHTML = `<p class="notesNoneText">Вы еще не создали заметки</p>`
}

function changeTheme() {
    let themeChangeElement = document.querySelector(`.themeChangeBtn`)
    let searchInputElement = document.querySelector(`.searchInput`)
    let bodyElement = document.querySelector('body')
    let bodyItemElement = document.querySelector(`.bodyItem`)
    let noteText = document.querySelectorAll(`.noteText`)
    console.log(noteText);

    themeChangeElement.addEventListener(`click`, () => {
        if (bodyElement.classList.contains(`night`)) {
            searchInputElement.classList.remove(`night`)
            bodyElement.classList.remove(`night`)
            bodyItemElement.classList.remove(`night`)
            noteText.forEach(text => text.style.color = `#252525`)
            themeChangeElement.innerHTML = `<img src="./icons/Vector (26).svg" alt="">`

            localStorage.setItem(`theme`, JSON.stringify({ night: false }))
        } else {
            searchInputElement.classList.add(`night`)
            bodyElement.classList.add(`night`)
            bodyItemElement.classList.add(`night`)
            noteText.forEach(text => text.style.color = `white`)

            themeChangeElement.innerHTML = `<img src="./icons/Vector (29).svg" alt="">`
            localStorage.setItem(`theme`, JSON.stringify({ night: true }))
        }
    })
}

function themeChangeLocal() {

    let themeChangeElement = document.querySelector(`.themeChangeBtn`)
    let searchInputElement = document.querySelector(`.searchInput`)
    let bodyElement = document.querySelector('body')
    let bodyItemElement = document.querySelector(`.bodyItem`)
    let noteText = document.querySelectorAll(`.noteText`)
    let themeChangeStorage = JSON.parse(localStorage.getItem(`theme`)) || []
    let themeRes = themeChangeStorage.night
    if (themeRes) {
        searchInputElement.classList.add(`night`)
        bodyElement.classList.add(`night`)
        bodyItemElement.classList.add(`night`)
        noteText.forEach(text => text.style.color = `white`)

        themeChangeElement.innerHTML = `<img src="./icons/Vector (29).svg" alt="">`
        localStorage.setItem(`theme`, JSON.stringify({ night: true }))
    } else if (!themeRes) {
        searchInputElement.classList.remove(`night`)
        bodyElement.classList.remove(`night`)
        bodyItemElement.classList.remove(`night`)
        noteText.forEach(text => text.style.color = `#252525`)
        themeChangeElement.innerHTML = `<img src="./icons/Vector (26).svg" alt="">`
    }


}


function renderNotesElements() {
    notesBoxElement.innerHTML = ``
    let notesLocalStorage = JSON.parse(localStorage.getItem(`notes`)) || []

    notesLocalStorage.forEach((notes, index) => {

        let noteElement = document.createElement(`div`)
        noteElement.classList = `note`
        noteElement.innerHTML = `
                    <div class="noteLeft">
                            <input class="checkedNote" data-index="${index}" type="checkbox">
                        <input class="noteText" value="${notes.note}" type="text" disabled>
                    </div>

                    <div class="renamesBox">
                        <button class="renameNote"><img src="./icons/Vector (28).svg" alt=""></button>
                        <button class="deleteNote"><img src="./icons/trash-svgrepo-com 1.svg" alt=""></button>
                    </div>
            `

        let noteText = noteElement.querySelector(`.noteText`)
        if (notes.checked) {
            let checkedNote = noteElement.querySelector(`.checkedNote`)
            checkedNote.checked = true
            noteText.style.color = `#7e7c7c`
            noteText.style.textDecoration = `line-through`
        } else {
            noteText.style.color = `#252525`
            noteText.style.textDecoration = `none`
        }
        notesBoxElement.append(noteElement)
    });

    notesBtnEvents()
    changeTheme()
}

renderNotesElements()

let sendBtnElement = document.querySelector('.sendBtn')

sendBtnElement.addEventListener(`click`, () => {

    let notesLocalStorageSet = JSON.parse(localStorage.getItem(`notes`)) || []
    let searchInputElement = document.querySelector(`.searchInput`)

    let searchInputElementValue = searchInputElement.value
    if (searchInputElementValue === '') {
        alert('Пустой инпут')
        return
    }

    let noteInformation = {
        note: searchInputElementValue,
        checked: false
    }

    notesLocalStorageSet.push(noteInformation)
    localStorage.setItem(`notes`, JSON.stringify(notesLocalStorageSet))
    renderNotesElements()
    changeTheme()
})


function notesBtnEvents() {

    let allNotes = document.querySelectorAll(`.note`)
    allNotes.forEach(notes => {
        let renamesBox = notes.querySelector(`.renamesBox`)

        notes.addEventListener(`mouseover`, () => renamesBox.classList.add(`active`))
        notes.addEventListener(`mouseout`, () => renamesBox.classList.remove(`active`))

    })
                    <div class="renamesBox">
                        <button class="renameNote"><img src="./icons/Vector (28).svg" alt=""></button>
                        <button class="deleteNote"><img src="./icons/trash-svgrepo-com 1.svg" alt=""></button>
                    </div>
            `

        let noteText = noteElement.querySelector(`.noteText`)
        if (notes.checked) {
            let checkedNote = noteElement.querySelector(`.checkedNote`)
            checkedNote.checked = true
            noteText.style.color = `#7e7c7c`
            noteText.style.textDecoration = `line-through`
        } else {
            noteText.style.color = `#252525`
            noteText.style.textDecoration = `none`
        }
        notesBoxElement.append(noteElement)
    });

    notesBtnEvents()
    changeTheme()
    themeChangeLocal()
}
renderNotesElements()

let sendBtnElement = document.querySelector('.sendBtn')

sendBtnElement.addEventListener(`click`, () => {

    let notesLocalStorageSet = JSON.parse(localStorage.getItem(`notes`)) || []
    let searchInputElement = document.querySelector(`.searchInput`)

    let searchInputElementValue = searchInputElement.value
    searchInputElement.value = ``
    if (searchInputElementValue === '') {
        alert('Пустой инпут')
        return
    }

    let noteInformation = {
        note: searchInputElementValue,
        checked: false
    }

    notesLocalStorageSet.push(noteInformation)
    localStorage.setItem(`notes`, JSON.stringify(notesLocalStorageSet))
    renderNotesElements()
    changeTheme()
})


function notesBtnEvents() {

    let allNotes = document.querySelectorAll(`.note`)
    allNotes.forEach(notes => {
        let renamesBox = notes.querySelector(`.renamesBox`)

        notes.addEventListener(`mouseover`, () => renamesBox.classList.add(`active`))
        notes.addEventListener(`mouseout`, () => renamesBox.classList.remove(`active`))

    })

    notesBoxElement.addEventListener(`click`, (e) => {
        console.log(e);
        if (e.target.classList.contains('checkedNote')) {
            const notDiv = e.target.closest(`.note`)
            const noteText = notDiv.querySelector(`.noteText`)
            const noteIndexGet = e.target.getAttribute(`data-index`)
            console.log(noteIndexGet);

            if (e.target.checked === true) {
                noteText.style.color = `#7e7c7c`
                noteText.style.textDecoration = `line-through`
            } else if (e.target.checked === false) {
                noteText.style.color = `#252525`
                noteText.style.textDecoration = `none`
            }
            let localStorageCheckedParse = JSON.parse(localStorage.getItem(`notes`)) || []
            localStorageCheckedParse[noteIndexGet].checked = e.target.checked
            localStorage.setItem(`notes`, JSON.stringify(localStorageCheckedParse))
            console.log(localStorageCheckedParse);
        }

        if (e.target.closest(`.deleteNote`)) {

            const noteDiv = e.target.closest(`.note`)
            const noteIndexElement = noteDiv.querySelector(`.checkedNote`)
            const noteIndex = +noteIndexElement.getAttribute(`data-index`)
            console.log(noteIndex);

            let storageDeleteGet = JSON.parse(localStorage.getItem(`notes`)) || []

            console.log("До удаления", storageDeleteGet);

            storageDeleteGet.splice(noteIndex, 1)

            console.log('После удаления', storageDeleteGet);

            localStorage.setItem(`notes`, JSON.stringify(storageDeleteGet))
            renderNotesElements()
        }
    })
    notesBoxElement.addEventListener(`click`, (e) => {
        console.log(e);
        if (e.target.classList.contains('checkedNote')) {
            const notDiv = e.target.closest(`.note`)
            const noteText = notDiv.querySelector(`.noteText`)
            const noteIndexGet = +e.target.getAttribute(`data-index`)
            console.log(noteIndexGet);

            if (e.target.checked === true) {
                noteText.style.color = `#7e7c7c`
                noteText.style.textDecoration = `line-through`
            } else if (e.target.checked === false) {
                noteText.style.color = `#252525`
                noteText.style.textDecoration = `none`
            }
            let localStorageCheckedParse = JSON.parse(localStorage.getItem(`notes`)) || []
            localStorageCheckedParse[noteIndexGet].checked = e.target.checked
            localStorage.setItem(`notes`, JSON.stringify(localStorageCheckedParse))
            console.log(localStorageCheckedParse);
        }

        if (e.target.closest(`.deleteNote`)) {

            const noteDiv = e.target.closest(`.note`)
            const noteIndexElement = noteDiv.querySelector(`.checkedNote`)
            const noteIndex = +noteIndexElement.getAttribute(`data-index`)
            console.log(noteIndex);

            let storageDeleteGet = JSON.parse(localStorage.getItem(`notes`)) || []

            console.log(storageDeleteGet);
            storageDeleteGet.splice(noteIndex, 1)
            console.log(storageDeleteGet);

            localStorage.setItem(`notes`, JSON.stringify(storageDeleteGet))
            renderNotesElements()
        }
    })
}