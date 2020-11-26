import React from 'react'

import Auxil from './Auxil.jsx'

const FormControl = (props) => {
    const { classes,type, disabled, placeholder, value, has_error, handler } = props
    return (
        <Auxil>
            <input
                className={'form-control ' + classes || ""}
                type={type || 'text'}
                disabled={disabled}
                placeholder={placeholder || ""}
                value={value}
                onChange={e => handler(e.target.value)}
            />
            {has_error ? <span className={'form-control-error'}> Invalid input </span> : null}
        </Auxil>

    )
}

export default FormControl;