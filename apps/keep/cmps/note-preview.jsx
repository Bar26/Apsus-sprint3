const { Link } = ReactRouterDOM
import { NoteTxt } from "./note-txt.jsx";
import { NoteImg } from "./note-img.jsx";

// import React from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPalette } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NotePreview extends React.Component {
    state = {
        type: '',
        noteStyle: {
            backgroundColor: '',
            fonstSize: '',
        },
    }


    // typeSelector = () => {
    //     let noteType = this.props.note.type
    //     this.setState(noteType)
    // }

    // handleStyleChange = (field, value) => {
    //     this.setState((prevState) => ({ footerStyle: { ...prevState.footerStyle, [field]: value } }))
    // }

    render() {
        const { type, noteStyle } = this.props.note;
        // console.log(this.props.note)
        return <section className="note-preview" >
            <DynamicCmp note={this.props.note} type={type} noteStyle={noteStyle} />
            <label className="palette">
            {/* <FontAwesomeIcon icon={faPalette} /> */}
                <input type="color" className="input-color" title="Set Line Color" />
            </label>
            {/* HERE */}
        </section>

    }
}


function DynamicCmp(props) {
    // console.log(props.type)
    switch (props.type) {
        case 'note-txt': {
            // console.log(props.note)
            return <NoteTxt note={props.note} />
        }
        case 'note-img': {
            return <NoteImg note={props.note}/>
        }
        case 'note-todos': {
            return <section className={props.id}>
                todo!!
            </section>
        }
    }
}