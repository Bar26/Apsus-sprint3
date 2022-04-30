import { eventBusService } from "../services/event-bus-service.js"
const { Link } = ReactRouterDOM

export class UserMsg extends React.Component {

    state = {
        msg:null
    }

    // componentDidMount(){
    //     eventBusService.on('user-msg',()=>{
    //         this.setState({msg})
    // })
    // }
  
    removeEvent;
    timeOutId

    componentDidMount() {
        console.log('user msg Mountedddd');
        this.removeEvent = eventBusService.on('user-msg', (msg) => {
            console.log('msg from event listener', msg);
            this.setState({ msg })
            if (this.timeoutId) clearTimeout(this.timeoutId)
            this.timeoutId = setTimeout(this.onCloseMsg, 3000)
        })
    }


    componentWillUnmount() {
        this.removeEvent()
    }

    onCloseMsg = () => {
        this.setState({ msg: null })
        clearTimeout(this.timeoutId)
    }
    
    
 
    render() {
        // const { msg,onCloseMsg,currBookAdded } = this.props
        // let URL
        // if(currBookAdded)  URL= `/book/${currBookAdded.id}`
        // if (!msg) return null
        // return <div className="user-msg">{msg.txt}
        // <Link to={URL}>Check it out here</Link>
        // <button onClick={onCloseMsg}>X</button>
        // </div>
        const { msg } = this.state
        if (!msg) return <React.Fragment></React.Fragment>
        return <div className={`user-msg ${msg.type}`}>
            <button onClick={this.onCloseMsg}>X</button>
            {msg.txt}
        </div>

    }

}
