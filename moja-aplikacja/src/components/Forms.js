// Form Handling

import { Component } from "react";

class Forms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handlUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Name</label>
                <input type="text" value={this.state.username} onChange={this.handlUsernameChange}/>
            </div>
            <div>Comments</div>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            <div>
                <label>Topic</label>
                <select value = {this.state.topic} onChange = {this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">angular</option>
                    <option value="vue">vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }

}

export default Forms