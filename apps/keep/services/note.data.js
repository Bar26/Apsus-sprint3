




export const NoteData = {
    getNotes
}




function getNotes() {
    return gNotes
}




const gNotes = [
    {
        id: 101,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "green"
        }
    },
    {
        id: 102,
        type: "note-img",
        info: {
            url: '../../img/star_border_black_20dp.png',
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "peach"
        }
    },
    {
        id: 103,
        type: "note-todos",
        info: {
            title: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#00d"
        }
    }
];