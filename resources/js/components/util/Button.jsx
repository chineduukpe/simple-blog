import React from 'react'

const Button = (props) => {
    return (
        <button
            onClick={() => props.handler()}
            className={`btn btn-${props.btnType || 'primary'} ` + props.classes}
            type={props.type || 'button'}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button;