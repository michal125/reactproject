import React, {Component} from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {/*this.props.name* w Apps trzeba napisać <User name= "Michal"/>*/}
                {this.props.name(false)}
                {/*this.props.render(false)*/}
            </div>
        )
    }
}

export default User