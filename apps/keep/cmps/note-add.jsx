


export class AddNote extends React.Component {
    state = {
        type: 'note-txt',
        note: {
            id: '',
            info: {
                url: '',
                txt: '',
                label: '',
                label: '',
                todos:[],
            }
        },
        style:{
            backgroundColor:''
        }
    }

    handleTypeChange = ({ target }) => {
        const type = target.value
        this.setState({ type })
    }

    handleChange = ({ target }) => {
        const field = target.id
        let value;
        if(field==='todos'){
            value = target.value.split(',');
            let objValueArr = value.map(txt=>{
                return {txt}
            })
            this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: objValueArr } } }))
        }
        else{
            value = target.value
            this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: value } } }))
        } 
    }

    renderByType = () => {
        const { type } = this.state;
        // console.log("RENDER BY TYPE")
        switch (type) {
            case 'note-txt':
                return <React.Fragment>
                    <input type='text-area' placeholder='enter title' onChange={this.handleChange} id='title'></input>
                    <input type='text-area' placeholder='enter text' onChange={this.handleChange} id='txt'></input>
                </React.Fragment>
            case 'note-img':
                return <React.Fragment>
                    תעלה תמונה יזיב
                </React.Fragment>
            case 'note-todos':
                return <React.Fragment>
                    <input type='text-area' placeholder='enter title' onChange={this.handleChange} id='title'></input>
                    <input type='text-area' placeholder='enter comma seperated list' onChange={this.handleChange} id='todos'></input>
                </React.Fragment>
        }
    }

    onAdd = (note) => {
        event.preventDefault()
        console.log(event);
        event.target[0].value = ''
        event.target[1].value = ''
        const {type} =this.state
        if (!note) return console.log("ohhhh")
        this.props.onCreate(note,type)
    }

    render() {
        const note = this.state.note
        return <section className='select-note-type'>
            <form className='add-note' onSubmit={() => this.onAdd(note)}>
                <this.renderByType />
                <button>Send</button>
            </form>
            <button onClick={() => this.handleTypeChange(event)} key='note-txt' value='note-txt'>Text Note</button>
            <button onClick={() => this.handleTypeChange(event)} key='note-img' value='note-img' >Image Note</button>
            <button onClick={() => this.handleTypeChange(event)} key='note-todos' value='note-todos'>Todo List</button>
        </section>
    }


}


