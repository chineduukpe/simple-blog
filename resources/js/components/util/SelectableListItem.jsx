import React from 'react'


const SelectableListItem = props => {
    let style = {
        display: 'block',
        width: '100%',
        fontSize: '.8em',
        padding: ".5em .3em ",
        background: '#fff',
        border: 'none',
        borderBottom: '1px solid rgba(200,200,200,.5)',
        cursor: 'pointer'
    }
    return (
        <span
        style={style}
        className="selectable-item"
        onClick={() => props.handler(props.id)}
        >{props.children}</span>
    )
}

export default SelectableListItem;