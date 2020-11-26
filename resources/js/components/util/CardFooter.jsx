import React from 'react'


const CardFooter = props => {
    let propStyles = props.styles ? props.styles : [];
    const style={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: props.textAlign || 'left',
        ...propStyles,

    }
    return (
        <div className="card" style={style}>
            {props.children}
        </div>
    )
}

export default CardFooter;