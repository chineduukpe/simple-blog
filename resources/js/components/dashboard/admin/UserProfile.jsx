import React from 'react'
import { useParams} from 'react-router-dom'

const UserProfile = (props) => {
    const { id } = useParams();
    const users = [
        {
            id: 1,
            name: "CHINEDU UKPE",

        },
        {
            id: 2,
            name: "ISAMA JOHN"
        }
    ];

    let currentUser = users.filter(function(user){
        return user.id == id
    });

    console.log('USER ID ', id, currentUser)

    return (
        <div>
            <h1>{ currentUser[0].name}</h1>
            <p>You are too awesome!</p>
        </div>
    )
}

export default UserProfile;