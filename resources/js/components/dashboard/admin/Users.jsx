import React from 'react'
import { Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom'

//IMPORTED COMPONENTS
import AllUsers from './AllUsers.jsx'
import UserProfile from './UserProfile.jsx'

const Users = (props) => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.path}>
                <AllUsers
                    parent_link={match.url}
                />
            </Route>
            <Route path={`${match.url}/:id`}>
                <UserProfile/>
            </Route>
        </Switch>
    )
}

export default Users;