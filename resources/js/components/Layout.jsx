// IMPORTED LIBRARIES
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'


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
    setAuthenticatedUser,
    hidePageLoader,
    attemptSignout,
    addTopicInterest,
    toggleDashboardNav,
    loadBlogs,
} from '../actions'

import SignUp from "./auth/SignUp";
import Spinner from "./util/Spinner";
import Dashboard from './dashboard/Dashboard';
import Margin from './util/Margin';
import { changeProfileImage, changeProfileName } from '../actions/profile_actions';
import BlogList from './BlogList';
import { Blogs } from './Blogs';
import SelectTopics from './SelectTopics';

const Layout = (props) => {
    //CHECK FOR LOGGED IN USER WHENEVER APP REFRESH
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // Push authenticated user from local storage to 
        // redux state when app loads
        let user = localStorage.getItem('pc_user');
        if (user && !props.state.auth.is_authenticated){
            props.setAuthenticatedUser(JSON.parse(user));
        }
        
        if (isLoading) {
            setIsLoading(false)
            props.loadBlogs()
        }
        
            
    })


    const {
        state,
         showNotifications,
          closeNotifications,
           attemptSignup,
            attemptLogin,
             addTopicInterest
            } = props;

    return (
            // props.state.loader.page_loader_open ? <PageLoader/> :

            <div className="container-fluid p-0">
                {/* <Router> */}
                <Navigation
                    user={props.state.auth.authenticated_user.user}
                    signoutAction={props.attemptSignout}
                />
                <Margin margin={55}/>
                    {/*<Spinner/>*/}
                    <Switch>
                        <Route exact path={'/'} >
                            <LandingPage 
                                blogs={props.state.blogs}
                                is_authenticated={props.state.auth.is_authenticated}
                            />
                        </Route>
                        <Route exact path={'/select-topics'} >
                            <SelectTopics 
                                topics={props.state.topics}
                                userTopics={props.state.userTopics}
                                addTopicHandler={addTopicInterest}
                            />
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
                            dashboard_nav_open={props.state.ui.dashboard_nav_open}
                            addTopicHandler={addTopicInterest}
                            userTopics={props.state.userTopics}
                            topics={props.state.topics}
                            changeProfileImage={props.changeProfileImage}
                            handleProfileNameChange={props.changeProfileName}
                            toggleDashboardNav={props.toggleDashboardNav}
                            />
                        </Route>
                        <Route to='/blogs' render={() => {
                            return <Blogs blogs={props.state.blogs} />
                        }}>
                            
                        </Route>
                    </Switch>
                {/* </Router> */}

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

const matchDispatchToProps = (dispatch,ownProps) => {
    return bindActionCreators({
        showNotifications,
        closeNotifications,
        attemptSignup: data => dispatch(attemptSignup(data, ownProps)),
        // attemptSignup: data => dispatch(data, ownProps),
        attemptLogin,
        setAuthenticatedUser,
        hidePageLoader,
        attemptSignout: () => dispatch(attemptSignout(ownProps)),
        addTopicInterest,
        changeProfileImage,
        changeProfileName,
        toggleDashboardNav,
        loadBlogs
        
    },dispatch)
}

export default withRouter(connect(matchStateToProps,matchDispatchToProps)(Layout));

