import { MailList } from "./cmps/mail-list.jsx"
import { mailService } from "./mail-services/mail-service.js"
import { MailHeader } from "./cmps/mail-header.jsx"
import { FolderList } from "./cmps/folder-list.jsx"

export class Mail extends React.Component {

    state = {
        mails: [],
        critiria: {
            status: 'inbox',    //'inbox/sent/trash/draft'
            txt: '',
            isRead: null, // (optional property, if missing: show all)
            isStarred: false, // (optional property, if missing: show all)
            // lables: ['important', 'romantic'] // has any of the labels

        }
    }



    componentDidMount() {
        this.loadMails()
        // eventBusService.on('user-msg', () => {
        //     this.setState({ msg })
        // })


    }

    loadMails = () => {
        mailService.query(this.state.critiria)
            .then(mails => this.setState({ mails }))
    }



    handleChange = ({ target }) => {
        const value = target.value
        console.log(value)
        const field = target.name
        console.log(field)
        this.setState((prevState) => ({ critiria: { ...prevState.critiria, [field]: value } }), () => this.loadMails())

    }

    onUpdateReadState = (mail) => {
        console.log(mail)
        mailService.updateReadState(mail)
        this.loadMails()
    }

    onDelete = (mail) => {
        mailService.deleteMail(mail)
        this.loadMails()

    }

    onUpdateStarredState = (mail) => {
        mailService.updateStarredState(mail)
        this.loadMails()
        console.log(this.inputRef.current.classList)

    }

    onUpdateCritiriaStatus = (status) => {
        this.setState((prevState) => ({ critiria: { ...prevState.critiria, status } }), () => this.loadMails())


    }

    componentDidUpdate() {
        console.log(this.state)
    }

    onUpdateCritiriaBooolian = (boolian) => {

        this.setState((prevState) => ({ critiria: { ...prevState.critiria, [boolian]: !this.state.critiria[boolian] } }), () => this.loadMails())
    }

    onCompose = () => {
        
    }




    render() {
        const { mails } = this.state
        return <section>
            <MailHeader handleChange={this.handleChange} />
            <section className="main-content flex clean-list">
                <FolderList onCompose={this.onCompose} onUpdateCritiriaStatus={this.onUpdateCritiriaStatus} onUpdateCritiriaBooolian={this.onUpdateCritiriaBooolian} />
                <MailList onDelete={this.onDelete} onUpdateStarredState={this.onUpdateStarredState} mails={mails} onUpdateReadState={this.onUpdateReadState} />

            </section>
            <section>
                {/* <Switch>
                <Route path="/about/team" component={Team} />
                <Route path="/about/vision" component={Vision} />
            </Switch> */}
            </section>
        </section>
    }

}