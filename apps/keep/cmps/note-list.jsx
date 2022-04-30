import { NotePreview } from './note-preview.jsx'
import { eventBusService } from '../../../services/event-bus-service.js';

export class NoteList extends React.Component {
state={
        isPinned:false,
        noteFromMail:null,
    }
    removeEvent;

    componentDidMount() {
        // this.removeEvent = eventBusService.on('user-msg', () => {
        //     // console.log('str from header', str)
        //     // this.setState({ carsCount })
        // })
        this.removeEvent = eventBusService.on('get-note', (note) => {
            // debugger
            this.setState((prevState) => ({ noteFromMail: { ...prevState, noteFromMail: note } }))
            this.props.onCreate(note, 'note-txt')
            this.removeEvent()
        })
    }

    render() {
        return <section className="note-list main-layout">
        {/* Hello */}
        {this.props.notes.map(note => {
            if(this.props.isPinned===note.isPinned)
            return <NotePreview loadNotes={this.props.loadNotes} note={note} key={note.id} onDupNote={this.props.onDupNote} onDeleteNote={this.props.onDeleteNote}/>
        })}
    </section>
    }
}