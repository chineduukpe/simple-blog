import React from 'react'


const CardHeader = props => {
    let propStyles = props.styles ? props.styles : [];
    const style={
        textAlign: props.textAlign || 'left',
        fontSize: props.fontSize || '.9em',
        backgroundColor: "#fff",
        // paddingLeft: 0,
        borderBottom: 0,
        ...propStyles
    }

    return (
        <div style={style} className={`card-header ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    )
}

export default CardHeader;