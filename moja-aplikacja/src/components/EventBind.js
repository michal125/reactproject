//Binding Event Handlers 28 linijka

import React, {Component} from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this) // użycie binda sposób 3 linijka 31
    }

   // clickHandler(){
    //    this.setState({
      //    message: 'Goodbay'
     //   }
      //  )
      //  console.log(this)

  //  }

  // 2 sposob clickHandler
  clickHandler = () =>{
    this.setState({
        message: 'Goodbay'
    })
  }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>          
                {/*<button onClick = {this.clickHandler.bind(this)}>Click</button>*/}
               {/* <button onClick ={() => this.clickHandler()}></button> */} 
               <button onClick ={() => this.clickHandler()}></button> 
            </div>
        )
    }
}

export default EventBind