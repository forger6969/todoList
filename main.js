let themeChangeBtn = document.querySelector('.themeChangeBtn')
let themeSvg = themeChangeBtn.querySelector(`img`)
let body = document.querySelector(`body`)
let searchInput = document.querySelector('.searchInput')
let bodyItem = document.querySelector('.bodyItem')

let createNoteBtn = document.querySelector('.createNoteBtn')
let notesElemntsBox = document.querySelector(`.notesBox`)

let localStorageNotes = JSON.parse(localStorage.getItem(`notes`)) || []

function renderNotes() {
    if (localStorageNotes.length === 0) {
        console.log('В LocalStorage ничего нет');
        return
    }

    localStorageNotes.forEach((notes, index) => {
        console.log(notes.noteText);

        let noteBox = document.createElement(`div`)
        noteBox.classList = 'note'

        noteBox.innerHTML = `
            <div class="noteLeft">
                <button class="checkedNote"></button>

                <div class="noteColumnBox">
                <input class="noteItem" value="${notes.noteNum}" type="text" disabled>
                <input class="noteText" value="${notes.noteText}" type="text">
                </div>

            </div>

            <div class="renamesBox">
                <button class="renameNote"><img src="./icons/Vector (28).svg" alt=""></button>
                <button data-index="${index}" class="deleteNote"><img src="./icons/trash-svgrepo-com 1.svg" alt=""></button>
            </div>
    `

        notesElemntsBox.append(noteBox)
    })
}

function events() {

    localStorageNotes.forEach((notes, index) => {

        let renamesBox = document.querySelector('note').querySelector('.renamesBox')
        let checkedNote = document.querySelector('note').querySelector('.checkedNote')
        let renameNoteElement = document.querySelector('note').querySelector('.renameNote')
        let noteTextElement = document.querySelector('note').querySelector('.noteText')
        let noteItemElement = document.querySelector('note').querySelector('.noteItem')
        noteTextElement.setAttribute(`disabled`, true)
        let note = noteBox
        let checked = false
        noteItemElement.style.textDecoration = notes.checkedBtn ? 'line-through' : 'none'
        noteItemElement.style.color = notes.checkedBtn ? '#7d7c7c' : '#252525'


        if (notes.checkedBtn) {
            checkedNote.innerHTML = `<img src="./icons/Rectangle 18.svg" alt="">`
            checkedNote.classList.add("checked")
        }

        checkedNote.addEventListener(`click`, () => {
            checkedNote.classList.toggle('checked')
            let isChecked = checkedNote.classList.contains(`checked`)

            checkedNote.innerHTML = isChecked ? `<img src="./icons/Rectangle 18.svg" alt="">` : ''
            noteItemElement.style.textDecoration = isChecked ? 'line-through' : 'none'
            noteItemElement.style.color = isChecked ? '#7d7c7c' : '#252525'

            notes.checkedBtn = isChecked
            localStorage.setItem("notes", JSON.stringify(localStorageNotes))
        })

        note.addEventListener(`mouseover`, () => {
            renamesBox.classList.add(`active`)
        })

        note.addEventListener(`mouseout`, () => {
            renamesBox.classList.remove(`active`)
        })

        renameNoteElement.addEventListener(`click`, () => {
            noteTextElement.removeAttribute("disabled") // делаем доступным
            noteTextElement.focus()

            console.log('enter');

        })

        noteTextElement.addEventListener(`keydown`, (e) => {
            if (e.key === 'Enter') {
                noteTextElement.setAttribute(`disabled`, true)
                notes.noteText = noteTextElement.value
                localStorage.setItem('notes', JSON.stringify(localStorageNotes))
            }
        })

        notesBox.append(noteBox)
    });


    renderNotes()

    themeChangeBtn.addEventListener(`click`, () => {
        body.classList.toggle(`night`)
        searchInput.classList.toggle(`night`)
        bodyItem.classList.toggle('night')

        if (body.classList.contains('night')) {
            themeSvg.src = './icons/Vector (29).svg'
        } else {
            themeSvg.src = './icons/Vector (26).svg'
        }

        createNoteBtn.addEventListener(`click`, () => {

            let noteBox = document.createElement(`div`)
            noteBox.classList = 'note'

            noteBox.innerHTML = `
            <div class="noteLeft">
                <button class="checkedNote"></button>
                
                <div class="noteColumnBox">
                <input class="noteItem" value="NOTE#${localStorageNotes.length}" type="text" disabled>
                <input class="noteText" value="Enter your note..." type="text" disabled>
                </div>
            </div>

            <div class="renamesBox">
                <button class="renameNote"><img src="./icons/Vector (28).svg" alt=""></button>
                <button class="deleteNote"><img src="./icons/trash-svgrepo-com 1.svg" alt=""></button>
            </div>
    `
            notesBox.append(noteBox)

            let renamesBox = noteBox.querySelector('.renamesBox')
            let checkedNote = noteBox.querySelector('.checkedNote')
            let renameNoteElement = noteBox.querySelector(`.renameNote`)
            let noteTextElement = noteBox.querySelector('.noteText')
            let noteItemElement = noteBox.querySelector('.noteItem')
            noteTextElement.setAttribute(`disabled`, true)
            let note = noteBox
            let checked = false

            note.addEventListener(`mouseover`, () => {
                renamesBox.classList.add(`active`)
            })

            note.addEventListener(`mouseout`, () => {
                renamesBox.classList.remove(`active`)
            })

            checkedNote.addEventListener(`click`, () => {
                checkedNote.classList.toggle('checked')
                let isChecked = checkedNote.classList.contains(`checked`)

                checkedNote.innerHTML = isChecked ? `<img src="./icons/Rectangle 18.svg" alt="">` : ''
                noteItemElement.style.textDecoration = isChecked ? 'line-through' : 'none'
                noteItemElement.style.color = isChecked ? '#7d7c7c' : '#252525'

                notes.checkedBtn = isChecked
                localStorage.setItem("notes", JSON.stringify(localStorageNotes))
            })

            renameNoteElement.addEventListener(`click`, () => {
                noteTextElement.removeAttribute("disabled") // делаем доступным
                noteTextElement.focus()

                console.log('enter');

            })

            noteTextElement.addEventListener(`keydown`, (e) => {
                if (e.key === 'Enter') {
                    noteTextElement.setAttribute(`disabled`, true)
                    notes.noteText = noteTextElement.value
                    localStorage.setItem('notes', JSON.stringify(localStorageNotes))
                }
            })

            let noteList = {
                noteNum: noteItemElement.value,
                noteText: noteTextElement.value,
                checkedBtn: checked
            }

            localStorageNotes.push(noteList)
            localStorage.setItem(`notes`, JSON.stringify(localStorageNotes))

        )
    }
    )
}