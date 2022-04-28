const { Link } = ReactRouterDOM
import { NoteTxt } from "./note-txt.jsx";
import { NoteImg } from "./note-img.jsx";
import { NoteToDo } from "./note-todo.jsx";
import { noteService } from "../services/note.service.js";

// import React from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPalette } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NotePreview extends React.Component {
    state = {
        type: 'x',
        noteStyle: {
            backgroundColor: '',
            // fonstSize: '',
        },
    }

    // handleStyleChange = (field, value) => {
    //     this.setState((prevState) => ({ footerStyle: { ...prevState.footerStyle, [field]: value } }))
    // }

    setColor = (noteId) => {
        const color = event.target.value
        noteService.setBGC(noteId,color)
        this.props.loadNotes();
    }

    onEditNote = (bookId) => {
        
    }

    // handleStyleChange = (field, value) => {
    //     this.setState((prevState) => ({ footerStyle: { ...prevState.footerStyle, [field]: value } }))
    // }

    render() {
        const note=this.props.note
        console.log(note)
        let style;
        if(!note.style) {
            style={backgroundColor:'green'}
        
        }
            else style= {backgroundColor:note.style.backgroundColor}
        const { type, noteStyle } = note;

        // console.log(this.props.note)
        return <section style={style} className="note-preview" >
            <DynamicCmp onDeleteNote={this.props.onDeleteNote} note={this.props.note} type={type} />
            <div className='note-preview-btn'>
            <label className="palette">
            {/* <FontAwesomeIcon icon={faPalette} /> */}
                <input type="color" className="input-color" title="Set Note Color" onChange={(ev)=>this.setColor(note.id)}/>
            </label>
            <label className="dup-note">
                <button onClick={()=>this.props.onDupNote(note.id)}>Duplicate</button>
            </label>
            <label className="edit-note">
                <button onClick={()=>this.onEditNote(note.id)}>Edit</button>
            </label>
            <label className="delete-note">
                <button onClick={()=>this.props.onDeleteNote(note.id)}>X</button>
            </label>
            </div>
            {/* HERE */}
        </section>

    }
}


function DynamicCmp(props) {
    // console.log(props.type)
    switch (props.type) {
        case 'note-txt': {
            // console.log(props.note)
            return <NoteTxt onDeleteNote={props.onDeleteNote} note={props.note} />
        }
        case 'note-img': {
            return <NoteImg onDeleteNote={props.onDeleteNote} note={props.note}/>
        }
        case 'note-todos': {
            return <NoteToDo onDeleteNote={props.onDeleteNote} note={props.note}/>
        }
    }
}