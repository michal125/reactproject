// example higher order component part2

import React from "react";

const UpdatedComponent = (OrginalComponent) => {
    class NewComponent extends React.Component {
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
            return <OrginalComponent count={this.state.count} incrementCount={this.incrementCount} />
            /*<WrappedComponent
               count = {this.state.count}
               incrementCount={this.incrementCount}
               {... this.props} 
            /> */
        }
    }
    return NewComponent
}

export default UpdatedComponent