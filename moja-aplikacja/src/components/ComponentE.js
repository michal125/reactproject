//Context example

import React, {Component} from "react";
import ComponentF  from './ComponentF';

class ComponentE extends Component {
    render() {
        return <ComponentF />
    }
}

//ComponentE.contextType = UserContext

export default ComponentE