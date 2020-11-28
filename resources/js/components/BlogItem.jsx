import React, { useEffect, useState } from 'react'

const BlogItem = props => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => async () => {
        if (isLoading) {
            setIsLoading(false)
        }
    })
    return <div className="blog-item col-md-4 mt-3">
        {props.children}
    </div>
}

export default BlogItem;