import React from 'react'
import SelectableListItem from './SelectableListItem'


const SelectableList = props => {
    const selectables = props.items || [];
    const field = props.field || "item";

    const list = () => {
        return selectables.map( (selectable, index) => {
            return <SelectableListItem
            handler={props.clickHandler}
            id={selectable['id']}
             key={index}>{selectable[field]}</SelectableListItem>})
    }
    return (
        <div className='shadow'>
            {
                list()
                }
        </div>
    )
}

export default SelectableList;