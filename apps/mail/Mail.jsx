import { MailList } from "./cmps/mail-list.jsx"
import { mailService } from "./mail-services/mail-service.js"
import { MailHeader } from "./cmps/mail-header.jsx"
import { FolderList } from "./cmps/folder-list.jsx"
import { Compose } from "./cmps/compose-mail.jsx"
import { Details } from './cmps/Details.jsx'
import { SortMails } from "./cmps/sort-mails.jsx"
import { eventBusService } from "../../services/event-bus-service.js"


const { Route, NavLink, Switch } = ReactRouterDOM



export class Mail extends React.Component {

    state = {
        mails: [],
        critiria: {
            status: 'inbox',    //'inbox/sent/trash/draft'
            txt: '',
            isRead: null, // (optional property, if missing: show all)
            isStarred: false, // (optional property, if missing: show all)
            // lables: ['important', 'romantic'] // has any of the labels
            category: '',

        }
    }
    inputRef = React.createRef()


    removeEvent;
    componentDidMount() {
        this.loadMails()

    }



    loadMails = () => {
        mailService.query(this.state.critiria)
            .then(mails => this.setState({ mails }))
    }


    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            console.log(prevProps.match.params, this.props.match.params)
            this.loadMails()
        }
        console.log(this.state)
    }



    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ critiria: { ...prevState.critiria, [field]: value } }), () => this.loadMails())

    }

    onUpdateReadState = (mail) => {
        console.log(mail)
        mailService.updateReadState(mail)
        this.loadMails()
        console.log(this.state.mails)
    }

    onDelete = (mail) => {
        mailService.deleteMail(mail)
        this.loadMails()

    }


    onUpdateStarredState = (mail) => {
        mailService.updateStarredState(mail)
        this.loadMails()

    }

    onUpdateMailStatus = (mail, status) => {
        if (mail.status === 'trash') this.onDelete(mail)
        else mailService.updateMailStatus(mail, status)
        this.loadMails()


    }

    onUpdateCritiriaStatus = (status) => {
        console.log('updating')
        this.setState((prevState) => ({ critiria: { ...prevState.critiria, status } }), () => this.loadMails())
        this.setState((prevState) => ({ critiria: { ...prevState.critiria, category: '' } }), () => this.loadMails())
        this.props.history.push('/mail')

    }

    onUpdateCritiriaCategory = (category) => {
        console.log('category update')
        this.setState((prevState) => ({ critiria: { ...prevState.critiria, category } }), () => this.loadMails())
        this.props.history.push('/mail')

    }

    onUpdateMailCategory = (mail, category) => {
        console.log('upating', mail, category)
        mailService.updateMailCategory(mail, category)
        this.loadMails()

    }


    onUpdateCritiriaBooolian = (boolian) => {

        this.setState((prevState) => ({ critiria: { ...prevState.critiria, [boolian]: !this.state.critiria[boolian] } }), () => this.loadMails())
    }

    onSort = ({ target }) => {
        const sortBy = target.value
        mailService.sort(sortBy)
        this.loadMails()
    }

    onToggleFolder = () => {
        this.inputRef.current.classList.toggle('open')
    }




    render() {
        const { mails } = this.state
        return <section>
            <MailHeader handleChange={this.handleChange} />
            <section className="main-content flex clean-list">
                <section className="menu flex column">
                    <NavLink to="/mail/compose" className="compose-link">Compose <img className="plus-icon" src="../../img/plus-icon.png" /></NavLink>
                    <FolderList onUpdateCritiriaCategory={this.onUpdateCritiriaCategory} onToggleFolder={this.onToggleFolder} inputRef={this.inputRef} onCompose={this.onCompose} onUpdateCritiriaStatus={this.onUpdateCritiriaStatus} onUpdateCritiriaBooolian={this.onUpdateCritiriaBooolian} />
                </section>
                <section className="flex column">
                    <SortMails onSort={this.onSort} ></SortMails>
                    <MailList onUpdateMailCategory={this.onUpdateMailCategory} onUpdateMailStatus={this.onUpdateMailStatus} onDelete={this.onDelete} onUpdateStarredState={this.onUpdateStarredState} mails={mails} onUpdateReadState={this.onUpdateReadState} />
                </section>
                {/* <section> */}
                <Switch>
                    <Route path="/mail/compose" component={Compose} />
                    <Route path="/mail/:mailId" component={Details} />

                </Switch>

            </section>

        </section>
    }

}