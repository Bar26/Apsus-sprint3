import { NotePreview } from './note-preview.jsx'

export class NoteList extends React.Component {
    // state={
    //     isPinned:false,
    // }

    render() {
        return <section className="note-list main-layout">
        {/* Hello */}
        {this.props.notes.map(note => {
            if(this.props.isPinned===note.isPinned)
            return <NotePreview onCreate={this.props.onCreate} loadNotes={this.props.loadNotes} note={note} key={note.id} onDupNote={this.props.onDupNote} onDeleteNote={this.props.onDeleteNote}/>
        })}
    </section>
    }
}