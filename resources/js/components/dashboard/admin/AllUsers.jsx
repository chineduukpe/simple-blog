import React from 'react'
import {Link} from 'react-router-dom'

const AllUsers = ({parent_link}) => {
    const users = [
        {
            id: 1,
            name: "CHINEDU UKPE",

        },
        {
            id: 2,
            name: "ISAMA JOHN"
        }
    ]
    return (
        <ul>
            {users.map(function(user, index){
                return <li key={index}><Link to={`${parent_link}/${user.id}`}>{user.name}</Link></li>
            })}
        </ul>
    )
}

export default AllUsers;