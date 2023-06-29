// compare PureComp and RegComp

import React, {Component} from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Michal'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Michal'
            })
        }, 2000)
    }

    render () {
        return (
            <div>
                Parent Component
                <MemoComp name = {this.state.name}></MemoComp>
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp