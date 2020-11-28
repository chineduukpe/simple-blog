import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loadBlogs } from '../actions'
import BlogDetail from './BlogDetail'
import BlogList from './BlogList'


export const Blogs = props => {
    const [hasLoaded,setHasLoaded] = useState(false);
    useEffect(() => {
        if (!hasLoaded) {
            setHasLoaded(true)
            // props.loadBlogs()
        }
    })
    return <div className="container-md">
        <Switch>
        <Route path={`/blogs/:id`} component={() => {
            return <BlogDetail></BlogDetail>
            }}>
            </Route>
            <Route exact path={'/blogs'} render={() => {

                return <BlogList blogs={props.blogs} >
                    <h5 className='text-primary bl-2 pl-2 bl-primary'>Blogs based on your interest</h5>
                 </BlogList>
            }}>
                
            </Route>
        </Switch>
    </div>
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({
        loadBlogs
    },dispatch)
}

const mapStateToProps = state => {
    return {
        blogs: state.blogs,
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Blogs);