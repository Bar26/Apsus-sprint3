

export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            type: '',
            isPinned: true,
            // label:'',
            // maxSpeed: ''
        },
    }


    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            // this.props.onSetFilter(this.state.filterBy)
        })
    }

    renderFilterOpt = ({ target }) => {
        let optName = target.name
        console.log(optName)
        switch (optName) {
            case 'type':
                return <section className='note-filter-type'>
                    <button onClick={this.onFilter[type]} name='note-txt'>Text</button>
                    <button name='note-img'>Images</button>
                    <button name='note-todos'>TODOs</button>
                </section>
        }
    }

    render() {
        const { type, isPinned } = this.state.filterBy
        return <section className="note-filter">
            {/* <button name='type' onClick={this.renderFilterOpt}>By Type</button>
            <button name='isPinned' onClick={this.renderFilterOpt}>By Pin</button> */}



            <form onSubmit={this.onFilter}> 
                <select className='note-filter-opt' >
                    <option name='type'>By-Type</option>
                    <option name='isPinned'>By-Pin</option>
                </select>
                {/* <label htmlFor="by-type">Vendor</label> */}
                {/* <input type="text" id="by-type" title="by type" name="type"
                    value={type} onChange={this.handleChange} /> */}
{/* 
                <label htmlFor="by-isPinned">Max Speed</label>
                <input type="number" id="by-isPinned" title="by Pin" name="isPinned"
                    value={isPinned} onChange={this.handleChange} /> */}

                <button>FILTER!</button>
                </form>
        </section>
    }
}