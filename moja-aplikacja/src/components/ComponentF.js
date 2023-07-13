import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
           // <div>
             //   ComponentF
            //</div>
            <UserConsumer>
                {username => {
                    return <div>Hello {username}</div>
                }}           
            </UserConsumer>
            )
    }
}

export default ComponentF