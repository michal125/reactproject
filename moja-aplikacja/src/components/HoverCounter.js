// example higher order component part1

import React, {Component} from 'react'
//part2 higher order component
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
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
        const {count, incrementCount} = this.props
        return(
            <div>
                <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
            </div>
        )
    }
}

//export default HoverCounter

//part2 higher order component
export default UpdatedComponent(HoverCounter)