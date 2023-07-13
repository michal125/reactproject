// example higher order component part1

import React, {Component} from 'react'
//part2 higher order component
import UpdatedComponent from './withCounter'

class ClickCounter extends Component{

   /* constructor(props){
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
    */
    //part2 higher order component
    render() {
        const {count, incrementCount} = this.props
       // const {count} = this.state
        return <button onlick={incrementCount}> Clicked {count} times</button>       
    }
}

//export default ClickCounter

//part2 higher order component
export default UpdatedComponent(ClickCounter)