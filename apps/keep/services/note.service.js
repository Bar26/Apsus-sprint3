
import { NoteData } from "./note.data.js"
import { storageService } from "../../../services/storage.service.js"


const NOTE_KEY = 'notesDB'


export const noteService = {
    query,
    deleteNote,
    createNote,
    add,
    dupNote,
    setBGC
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

function deleteNote(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

// function saveCar(note) {
//     if (note.id) return _update(note)
//     else return _add(note)
// }

function add(noteToAdd, type) {
    let notes = _loadFromStorage()
    const lastId = notes[notes.length - 1].id
    let newId = getNewId(lastId)
    noteToAdd.id = newId;
    noteToAdd.type = type;
    if(!noteToAdd.style) noteToAdd.style={backgroundColor:'green'}
    notes = [...notes, noteToAdd]
    _saveToStorage(notes)
}

function getNewId(bookId) {
    bookId = bookId + 1;
    return bookId
}

function _update(noteToUpdate) {
    let notes = _loadFromStorage()
    // console.log(noteToUpdate)
    _add(noteToUpdate)
    _saveToStorage(notes)
    return Promise.resolve()
}

function dupNote(noteId) {
    let copyNote = _findNote(noteId)
    add(copyNote, copyNote.type);
}

function setBGC(noteId, color) {
    let notes = _loadFromStorage()
    notes = notes.map(note => {
        if (note.id === noteId) {
            console.log(note)
            if(!note.style){
                color={backgroundColor:''}
                note.style=color
            }
            note.style.backgroundColor = color;
        }
        return note
    })
    _saveToStorage(notes)
}

function pinnedDown(bookId) {
    let notes = _loadFromStorage();

}

function createNote(id, type, title, txt) {
    let note = {
        id,
        type,
        title,
        txt,
    }
    console.log(note)
    return _update(note)
}

function _findNote(noteId) {
    let notes = _loadFromStorage()
    let resNote = notes.find(note => (note.id === noteId))
    return resNote
}

function _saveToStorage(notes) {
    storageService.saveToStorage(NOTE_KEY, notes)
}
function _loadFromStorage() {
    return storageService.loadFromStorage(NOTE_KEY)
}