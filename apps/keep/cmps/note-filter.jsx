

export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            type: 'all',
            txt: ''
        },
    }

    // onFilterButton = (type) => {
    //     this.setState({type})
    // }
    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => this.props.onSerchFiter({target}))
    }



render() {
    const { type } = this.state.filterBy
    return <section className="note-filter">
        {/* <button name='type' onClick={this.renderFilterOpt}>By Type</button>
            <button name='isPinned' onClick={this.renderFilterOpt}>By Pin</button> */}
        <input onChange={(event)=>this.handleChange(event)} name="txt" className="search" type="search" placeholder="search note by text" />
        <label>
            <select className='note-filter-opt' onChange={(event) => this.props.onFilter(event)} >
                <option value='all' name='all'>All Notes</option>
                <option value='note-txt' name='note-txt'>Text Notes</option>
                <option value='note-img' name='note-img'>Note Image</option>
                <option value='note-todos' name='note-todos'>TODOs</option>
                <option value='note-video' name='note-video'>Video Notes</option>
            </select>
        </label>
        {/* <button >FILTER!</button> */}
    </section>
}
}