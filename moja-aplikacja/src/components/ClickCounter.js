// example higher order component part1

import React, {Component} from 'react'

class ClickCounter extends Component{

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        //typical counter button
        this.setState((prevState) =>{
            return {count: prevState.count + 1 }
        }
        )
    }
    render() {
       // const {count} = this.state
        return <button onlick={this.incrementCount}>Clicked {this.state.count} times</button>       
    }
}

export default ClickCounter