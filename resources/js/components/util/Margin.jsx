import React from 'react'



const Margin = props => {
    return <div style={{margin: `${(props.margin || 50)}px auto`}}></div>
}

export default Margin;