import { MailList } from "./cmps/mail-list.jsx"
import { mailService } from "./mail-services/mail-service.js"

export class Mail extends React.Component {

    state = {
        mails: [],
        critiria: {
            status: null,    //'inbox/sent/trash/draft'
            txt: '',
            isRead: null, // (optional property, if missing: show all)
            isStared: null, // (optional property, if missing: show all)
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


    render() {
        const { mails } = this.state
        console.log(mails)


        return <section>
            <h1> welcome to mail home page</h1>
            <MailList mails={mails} />
        </section>
    }

}