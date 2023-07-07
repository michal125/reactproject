//exaple portals

import React from 'react'
import ReactDOM  from 'react-dom'

function PortalDemo() {
    return ReactDom.createPortal (
        <div>
            <h1>Portal Demo</h1>
        </div>
    )
}

export default PortalDemo