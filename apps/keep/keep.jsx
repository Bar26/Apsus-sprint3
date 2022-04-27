import { noteService } from "./services/note.service.js"
import { NoteList } from './cmps/note-list.jsx'
// import { NotePreview } from "./cmps/note-preview.jsx"



export class Keep extends React.Component {
    state = {
        notes: []
    }

    componentDidMount() {
        setTimeout(this.loadNotes, 1000)
    }

    loadNotes = () => {
        noteService.query()
            .then(notes => {
                console.log(notes)
                return this.setState({ notes })
            })

    }

    render() {
        const {notes} = this.state;
        console.log(notes)
        if (!notes.length) return <h1>Loading...</h1>
        return <section>
            <h1>Lets GO</h1>
            {/* <React.Fragment> */}
                <NoteList notes={notes}/>
                {/* <BookSearch addNewBook={this.addNewBook} books={books} /> */}
                {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
                {/* <BookList books={books} /> */}
            {/* </React.Fragment> */}
        </section>
    }
}