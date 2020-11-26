import React from 'react'


const CardStack = props => {
    let propStyles = props.styles ? props.styles : [];
    const style={
        display: 'flex',
        flexDirection: props.horizontal ? "row" : 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: props.textAlign || 'left',
        border: 'none',
        ...propStyles
    }
    return (
        <div className="card" style={style}>
            {props.children}
        </div>
    )
}

export default CardStack;