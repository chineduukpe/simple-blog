import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import Interests from './dashboard/Interests'


const BlogDetail = props => {
    const {id} = useParams()
    const blog = props.blogs.filter(blog => blog.id == id)[0]
    
    return (
        <div className="container-md">
            <div className="row blog-detail-wrapper">
                <div className="col-md-8 blog-detail">
    <span className="blog-tag">{blog.topic}</span>
                    <img className="img-fluid" src={blog.blog_image_url} alt="blogimga"/>
                    <div className="blog-meta">
                        <span className="post-maker">
                            <img src={blog.user.profile_image_url} alt=""/>
                            <small>{blog.user.name}</small>
                        </span>
                        <span>
                            <small className="text-muted"><i className="fa fa-clock-o"></i> {blog.created_at.substr(0,10)}</small>
                        </span>
                        <span className="social-share">
                            <small className="text-muted">Share: </small>
                            <button className="btn btn-primary btn-sm"> <i className="fa fa-whatsapp"></i></button>
                            <button className="btn btn-danger btn-sm"> <i className="fa fa-youtube"></i></button>
                            <button className="btn btn-success btn-sm"> <i className="fa fa-whatsapp"></i></button>
                            
                        </span>
                    </div>
                    <div className="blog-text">
                        {blog.body}
                    </div>
                </div>
                <div className="col-md-3 offset-1 interests bg-white">
                    <h5 className="text-danger  bl-2 bl-danger pl-2 mb-2 mt-3">Related Posts</h5>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userTopics: state.userTopics,
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogDetail);