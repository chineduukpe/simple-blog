import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loadBlogs } from '../actions'
import BlogItem from './BlogItem'
import Spinner from './util/Spinner'

const BlogList = props => {
    const [isLoading, setIsLoading] = useState(true)
    console.log(props.blogs)
    useEffect(() => {
        if (isLoading) {
            // props.loadBlogs()
            setIsLoading(false)
        }
    })
    
    const renderBlogs = () => {
        if (!props.blogs.length) {
            return <h6 className="text-muted p-3">Oops! Nothing to show here. Seems you have not selected a topic. Go to <Link to='/dashboard' className='text-danger'>Dashboard</Link> to add topics </h6>
        }
        return props.blogs.map(function(blog,index){
           return <BlogItem key={index}>
                <div className="blog-tag">{blog.topic}</div>
                <img src={blog.blog_image_url} alt="" className='img-fluid'/>
                <div className="blog-desc-wrapper">
        <h5 className="blog-title bl-2 bl-danger pl-2">{blog.title}</h5>
        <p className="blog-exerpt">
            {blog.body.substr(0,150)}
        </p>
        <Link to={`/blogs/${blog.id}`} className='btn-outline-danger btn btn-sm'>Read more...</Link>
                </div>
            </BlogItem>
        })
    }

    return (
        <div className="blog-list row bg-white p-3 bt-5" style={{borderRadius: '2em', borderTop: '2px solid'}}>
            <div className="col-sm-12">
            {props.children}
            </div>
            {isLoading ? <Spinner/> : renderBlogs()}
        </div>
    )
}
const matchDispatchToProps = dispatch => {
    return bindActionCreators({
        loadBlogs      
    },dispatch)
} 
export default connect(null,matchDispatchToProps)(BlogList);