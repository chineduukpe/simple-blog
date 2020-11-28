import React from 'react'

const BlogItem = props => {
    return <div className="blog-item col-md-4 mt-3">
        {props.children}
    </div>
}

export default BlogItem;