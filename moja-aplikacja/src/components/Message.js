// this is example state.

import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitior'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.message} </h3>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message