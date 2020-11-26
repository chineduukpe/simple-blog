import React from 'react'


const CardBody = props => {
    let propStyles = props.styles ? props.styles : [];
    const style={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '3e',
        ...propStyles
    }

    return (
        <div style={style} className='card-body'>
            {props.children}
        </div>
    )
}

export default CardBody;