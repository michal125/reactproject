//inny sposob pobierania stylow

import React from 'react'
import styles from './appStyles.modules.css'

const heading = { 
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    //Inne pobieranie stylow. Linijka 15/16
    return (
        <div>
            <h1 className={styles.success}>Success</h1> 
            <h1 className='error'>Error</h1> 
            <h1 style={heading}>Inline</h1> 
        </div>
    )
}

export default Inline