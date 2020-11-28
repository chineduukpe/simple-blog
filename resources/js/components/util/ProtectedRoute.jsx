import { rest } from 'lodash'
import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({component: Component, is_authenticated, ...rest}) => {
    if (!is_authenticated) {
        return <Redirect to={'/login'} />
    }
    return <Route {...rest} render={props => {
        return <Component {...props} {...rest} />
    }}></Route>
}

export default ProtectedRoute;