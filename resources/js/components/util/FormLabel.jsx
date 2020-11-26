import React from 'react'

const FormLabel = (props) => {
    return (
        <label htmlFor={props.htmlFor || ""}>
            {props.label || ""}
            {props.children}
            </label>
    )
}

export default FormLabel;