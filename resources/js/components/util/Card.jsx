import React from 'react'


const Card = props => {
    let propStyles = props.styles ? props.styles : [];
    const style={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: props.textAlign || 'left',
        boxShadow: "0 0 4px rgba(200,200,200,.3)",
        padding: 0,
        flexGrow:1,
        ...propStyles
    }
    return (
        <div className="card" style={style}>
            {props.children}
        </div>
    )
}

export default Card;