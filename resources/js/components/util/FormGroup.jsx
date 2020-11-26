import React from 'react'

const FormGroup = (props) => {
    return (
        <div className={'form-group ' + props.classes || ""}>
            {props.children}
        </div>
    )
}

export default FormGroup;