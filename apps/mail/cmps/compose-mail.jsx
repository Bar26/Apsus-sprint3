import { mailService } from "../mail-services/mail-service.js"

export class Compose extends React.Component {


    onAddMail = (ev) => {
        console.log(ev.submitValue)
        ev.preventDefault()
        console.log(ev.target)
        const { target } = ev
        console.log(target[4])
        const to = target[0].value
        const subject = target[1].value
        const body = target[2].value
        mailService.addMail(to, subject, body)
        this.props.history.push('/mail')
    }




    render() {

        return <div className="compose-mail flex column">
            <div className="new-email flex " >New Email</div>
            <form onSubmit={this.onAddMail} className="mail-form flex column">
                <input className="to" type="email" placeholder="To" name="to" />
                <input className="subject" type="text" placeholder="subject" name="subject" />
                <textarea className="body" type="text" name="body" />
                <button value="sendbtn" className="send">Send</button>
                <button value="btnn" className="to-draft">✖</button>
            </form>
        </div>
    }


}