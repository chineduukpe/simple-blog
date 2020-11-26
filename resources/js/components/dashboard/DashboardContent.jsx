import React from 'react'


const DashboardContent = props => {
    return (
        <div className="dashboard-content p-4">
            {props.children}
        </div>
    );
}


export default DashboardContent;