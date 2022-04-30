

const { Link, NavLink, withRouter } = ReactRouterDOM



export function SideBar() {

    return <section className='side-bar'>
        <nav>
            <NavLink to="/" exact>
                <label className="dup-note" title="Keep Home">
                    <i class="fa-solid fa-house"></i>
                </label></NavLink>
            <NavLink to="/keep"><i class="fa-solid fa-book"></i></NavLink>
            <NavLink to="/mail" activeClassName="my-active">Our Cars</NavLink>
        </nav>
        {<label className="dup-note" title="Keep Home">
            <i className="fa-solid fa-copy"></i>
        </label>}
    </section>
}