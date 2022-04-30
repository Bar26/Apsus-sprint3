




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
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "",
            color:"f121212"
        }

    },
    {
        id: 102,
        type: "note-img",
        isPinned: true,
        info: {
            url: 'https://www.sweety.co.il/media/catalog/product/cache/1/image/830x519/9df78eab33525d08d6e5fb8d27136e95/f/i/file_51_32.jpg',
            title: "גרמניה עולה באש"
        },
        style: {
            backgroundColor: "green",
            color:"525252"
        }
    },
    {
        id: 103,
        type: "note-todos",
        isPinned: true,
        info: {
            title: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#00d",
            color:"whitesmoke"
        }
    },
    {
        id: 104,
        type: "note-video",
        isPinned: false,
        info: {
            title: "GreenAps New Realse",
            url:"https://www.youtube.com/embed/C5zSsJ5CU54",
        },
        style: {
            backgroundColor: "#00d",
            color:"whitesmoke"
        }
    },
    {
        id: 105,
        type: "note-img",
        isPinned: true,
        info: {
            title: "Me vs Sprint 3",
            url:"https://i.makeagif.com/media/7-12-2017/g06Fx7.gif",
        },
        style: {
            backgroundColor: "#00d",
            color:"whitesmoke"
        }
    }
];