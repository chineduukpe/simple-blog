import { random } from 'lodash'
import React from 'react'
import Auxil from './Auxil'

const FileInputWithEvent = props => {
    const inputId = props.inputName || `${120 + (Math.random() * 1000)}`
    const propStyles = props.style ? {...props.style} : {};
    const inputStyle = {
        overflow: 'hidden',
        height: 0,
        width: 0
    }

    const buttonStyle = {
        fontSize: ".8em",
    }


    return (
            <Auxil>
                <input 
                    style={inputStyle} 
                    type="file" 
                    id={inputId}
                    onChange={e => props.handler(e.target.files[0])}
                 />
                <button 
                    style={{...buttonStyle,...propStyles}}
                    onClick={() => {
                        document.getElementById(inputId).click()
                    }}
                    className={`btn btn-sm btn-${props.color ? props.color : 'primary'}`}
                >Upload</button>
            </Auxil>
    )
} 

export default FileInputWithEvent;