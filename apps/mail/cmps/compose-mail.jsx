import { mailService } from "../mail-services/mail-service.js"
import { eventBusService } from "../../../services/event-bus-service.js"

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
    inputRef2 = React.createRef()
    inputRef3 = React.createRef()

    state={
        mail:''
    }
    

    componentDidMount() {

        eventBusService.on('preview-compose', (mail) => {
            this.setState({mail},()=>{
                console.log(this.state)
            })
        //  this.valueRender(mail)
        //  this.getInput()

       
        })
    }

    valueRender=(mail)=>{
        if(mail.subject) return mail.subject
    }

    // getInput=()=>{
    //     console.log(this.state, this.inputRef2)
    //     return this.inputRef2
    // }
    
   


    render() {
 
        console.log(this.state)
        return <div className="compose-mail flex column">
            <div className="new-email flex " >New Email</div>
            <form onSubmit={this.onAddMail} className="mail-form flex column">
                <input  className="to" type="email" placeholder="To" name="to" />
                <input value={this.valueRender} ref={this.inputRef2}  className="subject" type="text" placeholder="subject" name="subject" />
                <textarea ref={this.inputRef3} className="body" type="text" name="body" />
                <button value="sendbtn" className="send">Send</button>
                <button value="btnn" className="to-draft">✖</button>
            </form>
        </div>
    }


}