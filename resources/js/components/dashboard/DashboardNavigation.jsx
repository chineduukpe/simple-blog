import React from 'react'
import {Link} from 'react-router-dom'


const DashboardNavigation = props =>{
    return (
        <div className='dashboard-navigation'>
            <div className="text-center avatar-wrapper">
                <img src="http://localhost:8000/assets/img/profile/default.jpg" alt="avatar"/>
                <h4 className='text-center'>Chinedu Ukpe</h4>
                <span>Admin</span>
            </div>
            <button className="close">x</button>
            <ul>
                <h6 className="text-primary mt-3">Dashboard</h6>
                <li className='active'> <Link to='/dashboard/profile'><i className="fa fa-user"></i> Profile</Link></li>
                <li> <Link to='/dashboard/profile'><i className="fa fa-cog"></i> Setting</Link></li>
                <li> <Link to='/dashboard/changepassword'><i className="fa fa-lock"></i> Change Password</Link></li>
                <hr/>
                <h6 className="text-primary">Admin</h6>
                <li><Link to='/dashboard/posts'>Users</Link></li>
            </ul>
            <div className="dashboard-nav-footer">
                <i className="fa fa-sign-out"></i>
                <Link to='/logout'>Logout</Link>
            </div>
        </div>
    );
}

export default DashboardNavigation;