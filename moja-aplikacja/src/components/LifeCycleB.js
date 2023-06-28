 
 import React, {Component, component} from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
 
         this.state ={
             name: 'Michal'
         }
         console.log('LifeCycleB constructor')
     }
 
     static getDerivedStateFromProps(props, state){
         console.log('LifeCycleB getDerivedStateFromProps')
         return null
     }
 
     componentDidMount(){
         console.log('LifeCycleB componentDidMount')
     }

     shouldComponentUpdate(){
        console.log('object')
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

     render() {
             console.log('LifcycleB render')
             return <div>Lifcycle B</div>
     }
 }
 
 export default LifeCycleB