
import { NoteData } from "./note.data.js"
import { storageService } from "../../../services/storage.service.js"


const NOTE_KEY = 'notesDB'


export const noteService = {
    query,
}

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = NoteData.getNotes()
        _saveToStorage(notes)
    }

    // if (filterBy) {
    //     let { bookName, minPrice, maxPrice } = filterBy
    //     if (!minPrice) minPrice = 0
    //     if (!maxPrice) maxPrice = Infinity

    //     books = books.filter(book => {
    //         return (book.title.toLowerCase().includes(bookName.toLowerCase()) &&
    //             book.listPrice.amount <= maxPrice &&
    //             book.listPrice.amount >= minPrice)
    //     })
    // }
    return Promise.resolve(notes)
}



function _saveToStorage(notes) {
    storageService.saveToStorage(NOTE_KEY, notes)
}
function _loadFromStorage() {
    return storageService.loadFromStorage(NOTE_KEY)
}