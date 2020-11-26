import React from 'react'

const ComponentHeader = (props) => {

    return (
        <div className={`component-header ${props.headerType || 'bg-primary'} ` + props.classes || ""}>
            {props.children}
        </div>
    )
}

export default ComponentHeader;