import React from 'react'
import { Link } from 'react-router-dom'
import BlogItem from './BlogItem'

const BlogList = props => {
    
    const renderBlogs = () => {
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
            {renderBlogs()}
        </div>
    )
}

export default BlogList;