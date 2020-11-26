import React from 'react'

const Spinner = (props) => {
    const propStyles = props.styles ? props.styles : []
    return (
        <div className={'spinner'} style={{...propStyles}}></div>
    )
}

export default Spinner;