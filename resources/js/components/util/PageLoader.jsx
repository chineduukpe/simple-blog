import React from 'react'


const PageLoader = (props) => {


    const styles = {
        position: 'fixed',
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100vw',
        height: "100vh",
        content: 'Loading...',
        backgroundColor: "linear-gradient(to bottom, #58f, #5f8)"
    }

    return (
        <div className={'page-loader'} style={styles}>
            <span className="spinner"></span>
            {props.children}
        </div>
    )
}

export default PageLoader;
