const { Link } = ReactRouterDOM
import { ShortenTxt } from "../../../cmps/shorten-txt.jsx"
import { Details } from "./Details.jsx"
import { eventBusService } from "../../../services/event-bus-service.js"

const { withRouter } = ReactRouterDOM;
export class _MailPreview extends React.Component {


    state = {
        note: ''
    }


    componentDidMount() {

        eventBusService.on('note-to-mail', (mail) => {
            console.log(mail)
            this.onMakeNoteToMail(mail)
        })
    }

    onMakeNoteToMail = (mail) => {
        this.props.history.push('/mail/compose')
        eventBusService.emit('preview-compose', mail)
    }

  
    // componentWillUnmount() {
    //     this.removeEvent()
    // }

    onSendMailToNote = (mail) => {
        const note = { info: { title: mail.subject, txt: mail.body } }
        console.log(note)
        this.setState({ note }, () => {
            eventBusService.emit('get-note', note)
        })
    }

    inputRef4 = React.createRef()

    onToggleChooseCategory=()=>{
        console.log(this.inputRef4)
        this.inputRef4.current.classList.toggle('close')

    }



    render() {
        const { onUpdateMailCategory, onUpdateMailStatus, mail, onUpdateReadState, onUpdateStarredState } = this.props
        const date = new Date(mail.sentAt)
        const now = new Date()
        let hours = date.getHours()
        if (hours < 10) hours = `0${hours}`
        let minutes = date.getMinutes()
        if (minutes < 10) minutes = `0${minutes}`
        const monthName = date.toLocaleString('default', { month: 'short' })
        const text = mail.body
        let dateToShow

        if ((date.getMonth() === now.getMonth()) && (date.getDate() === now.getDate()) && (date.getFullYear() === now.getFullYear())) {
            dateToShow = `${hours}:${minutes}`
        } else {
            dateToShow = `${date.getDate()} ${monthName}'`
        }
        let className = (mail.isRead === false) ? 'mail flex align-center unRead' : 'mail flex align-center read'

        return <article className={className} >
            <div className={`star-container flex ${mail.isStarred ? 'starred' : ''}`} onClick={() => onUpdateStarredState(mail)}></div>
            <span className="from flex">{mail.from}</span>
            <span className="subject flex">{mail.subject} </span>
            <Link to={`/mail/${mail.id}`}><ShortenTxt text={text} /></Link>
            <section className="date-btn-container flex">
                <div className="dispare"><span className="date flex">{dateToShow}</span></div>
                <div className="send-note" onClick={() => this.onSendMailToNote(mail)}></div>

                <div className="delete-container" onClick={() => onUpdateMailStatus(mail, 'trash')} ></div>
                <div className="categories-container " onClick={this.onToggleChooseCategory}></div>
            </section>
            <section className="choose-category close " ref={this.inputRef4}>
                <div className="choose-family" onClick={() => onUpdateMailCategory(mail, 'family')} >Family</div>
                <div className="choose-friends" onClick={() => onUpdateMailCategory(mail, 'friends')}>Friends</div>
                <div className="choose-promotions" onClick={() => onUpdateMailCategory(mail, 'promotions')}>Promotions</div>
                <div className="choose-spam" onClick={() => onUpdateMailCategory(mail, 'spam')}>Spam</div>
            </section>

            <div className={`read-container ${mail.isRead ? 'read' : ''}`} onClick={() => onUpdateReadState(mail)}></div>
        </article>

    }


}

export const MailPreview = withRouter(_MailPreview);