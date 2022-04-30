

const { Link, NavLink, withRouter } = ReactRouterDOM



export function SideBar() {

    return <section className='side-bar'>
        {/* <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/keep">Keep</NavLink>
            <NavLink to="/car" activeClassName="my-active">Our Cars</NavLink>
        </nav> */}
        {/* <label className="dup-note" title="Keep Home">
                    <i className="fa-solid fa-copy"></i>
                </label> */}
        {/* <label className="pin-note" title="Miss-Book">
                    <button onClick={() => this.onPinNote(note.id)} ></button>
                    <i className="fa-solid fa-thumbtack"></i>
                </label>
                <label className="edit-note" title='Mister-Mail'>
                    <button onClick={() => this.onEditNote(note.id)} ></button>
                    <i className="fa-solid fa-pen-to-square"></i>
                </label>
                <label className="delete-note" title="Miss-Keep">
                    <button onClick={() => this.props.onDeleteNote(note.id)}  ></button>
                    <i className="fa-solid fa-trash"></i>
                </label>
                <label className="delete-note" title="About">
                    <button onClick={() => this.props.onDeleteNote(note.id)}  ></button>
                    <i className="fa-solid fa-trash"></i>
                </label> */}
    </section>
}