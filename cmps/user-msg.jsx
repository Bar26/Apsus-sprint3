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

    componentDidMount(){
        if(this.timeOutId) clearTimeout(this.timeOutId)
        this.timeOutId = setTimeout(this.props.onCloseMsg, 3000);
    }


    componentWillUnmount() {
        this.removeEvent()
    }

    onCloseMsg = () => {
        this.setState({ msg: null })
        clearTimeout(this.timeoutId)
    }
    
    
 
    render() {
        const { msg,onCloseMsg,currBookAdded } = this.props
        let URL
        if(currBookAdded)  URL= `/book/${currBookAdded.id}`
        if (!msg) return null
        return <div className="user-msg">{msg.txt}
        <Link to={URL}>Check it out here</Link>
        <button onClick={onCloseMsg}>X</button>
        </div>
    }

}
