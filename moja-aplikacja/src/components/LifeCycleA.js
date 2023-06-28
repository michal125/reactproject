 //component lifecycle 1 constructor 2 getDerivedStateFromProps 3 render 4 componentDidMount
import React, {Component, component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state ={
            name: 'Michal'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
        return true
    }

    shouldComponentUpdate(){
        console.log('object')
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifcycleA render')
        return(
            <div>
                <div>Lifcycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB/>
            </div>
        ) 
    }
}

export default LifeCycleA