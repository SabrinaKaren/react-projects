import React from "react"

const Tabs = props => {
    return (
        <div className='nav-tabs-custom'> 
            {props.children}
        </div> 
    )
}

export default Tabs