// IMPORTED LIBRARIES
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


//IMPORTED COMPONENTS
import Navigation from './Navigation'
import Footer from './Footer'
import Login from './auth/Login'
import Notification from "./util/Notifications"
import Users from './dashboard/admin/Users'
import PageLoader from './util/PageLoader'
import LandingPage from './LandingPage'

//IMPORTED ACTIONS
import {
    showNotifications,
    closeNotifications,
    attemptSignup,
    attemptLogin,
    authenticationSuccess,
    hidePageLoader,
    attemptSignout,
    addTopicInterest,
    addTopicInterestSuccess,
    addTopicInterestFail,
} from '../actions'

import SignUp from "./auth/SignUp";
import Spinner from "./util/Spinner";
import Dashboard from './dashboard/Dashboard';
import Margin from './util/Margin';

const Layout = (props) => {

    //CHECK FOR LOGGED IN USER WHENEVER APP REFRESH
    useEffect(() => {
        let user = localStorage.getItem('pc_user');
        if (user && !props.state.auth.is_authenticated){
            props.authenticationSuccess(JSON.parse(user));
        }
        if (props.state.loader.page_loader_open)
            setTimeout(() => {
                props.hidePageLoader()
            }, 3000)

    })


    const {state, showNotifications, closeNotifications, attemptSignup, attemptLogin, addTopicInterest} = props;

    return (
            // props.state.loader.page_loader_open ? <PageLoader/> :

            <div className="container-fluid p-0">
                <Router>
                <Navigation
                    user={props.state.auth.authenticated_user.user}
                    signoutAction={props.attemptSignout}
                />
                <Margin margin={55}/>
                    {/*<Spinner/>*/}
                    <Switch>
                        <Route exact path={'/'} >
                            <LandingPage/>
                        </Route>
                        <Route path={'/login'}>
                            <Login
                                loginHandler={attemptLogin}
                                is_loading={state.loader.is_open}
                                isAuthenticated={props.state.auth.is_authenticated}
                                authRedirectPath={'/'}
                            />
                        </Route>
                        <Route path={'/register'}>
                            <SignUp
                            signupHandler={attemptSignup}
                            is_loading = {state.loader.is_open}
                            />
                        </Route>
                        <Route path={'/dashboard'}>
                            <Dashboard
                            user={props.state.auth.authenticated_user}
                            addTopicInterest={addTopicInterest}
                            />
                        </Route>
                    </Switch>
                </Router>

                {/* <Footer /> */}

                <Notification
                    notifications={state.notifications}
                    handleCloseNotifications={closeNotifications}
                />
            </div>
        )
}

const matchStateToProps = (state) => {
    return {state};
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        showNotifications,
        closeNotifications,
        attemptSignup,
        attemptLogin,
        authenticationSuccess,
        hidePageLoader,
        attemptSignout,
        addTopicInterest,
    },dispatch)
}

export default connect(matchStateToProps,matchDispatchToProps)(Layout);

