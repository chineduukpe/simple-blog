import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Auxil from './util/Auxil'

const Navigation = (props) => {
    //conditionally render loggedin User or auth menu
    let navlinks = !props.user ?
        <Auxil>
            <li className="nav-item"> <Link to={'/login'} className={'nav-link'}>Login</Link> </li>
            <li className="nav-item"> <Link to={'/register'} className={'nav-link'}>Register</Link> </li>
            
        </Auxil>
        :
        <Auxil>
            <li className="nav-item"> <Link to={'/blogs'} className={'nav-link'}>Blog List</Link> </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">{props.user.name} </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="navbar-collapse navbar-top-collapse">
                        <ul id="menu-top-menu" className="nav navbar-nav">
                            <li id="menu-item-601"
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-601">
                                <Link to={'/dashboard'}> <i className="fa fa-dashboard"></i> Dashboard</Link>
                            </li>
                            <li id="menu-item-603"
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-603">
                                <Link to={'/profile'} > <i className="fa fa-user"></i> Profile </Link>
                            </li>
                            
                            <li className="dropdown-divider"></li>
                            <li id="menu-item-1537"
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1537">
                                <a href="javascript:;" onClick={() => props.signoutAction()} className={'bg-danger'}> <i className="fa fa-sign-in"></i> logout</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </li>
        </Auxil>

    return (
        <nav className={`navbar navbar-expand-lg navbar-light`} >
            
            <div className="container"><Link className="navbar-brand" to="/"><span className="text-danger">Pet</span>Blog</Link>
                <div className="d-flex ml-auto">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNavbar"
                            aria-controls="globalNavbar" aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                </div>
                <div className="collapse navbar-collapse" id="globalNavbar">
                    <form className="form-inline form-navbar my-2 my-lg-0 order-2"
                          action="#">
                        <input className="form-control" name="s" type="text" placeholder="Search"/>
                    </form>
                    <ul className="navbar-nav mr-auto order-1 bl-primary bl-2">
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" data-toggle="dropdown"
                                                             aria-haspopup="true" aria-expanded="false">Categories</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="navbar-collapse navbar-top-collapse">
                                    <ul id="menu-top-menu" className="nav navbar-nav">
                                        <li id="menu-item-601"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-601">
                                            <a title="Admin &amp; Dashboard"
                                               href="https://themes.getbootstrap.com/product-category/admin-dashboard/">Admin &#038; Dashboard</a>
                                        </li>
                                        <li id="menu-item-603"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-603">
                                            <a title="Landing &amp; Corporate"
                                               href="https://themes.getbootstrap.com/product-category/landing-corporate/">Landing &#038; Corporate</a>
                                        </li>
                                        <li id="menu-item-1537"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1537">
                                            <a title="Application"
                                               href="https://themes.getbootstrap.com/product-category/application/">Application</a>
                                        </li>
                                        <li id="menu-item-602"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-602">
                                            <a title="E-Commerce &amp; Retail"
                                               href="https://themes.getbootstrap.com/product-category/ecommerce-retail/">E-Commerce &#038; Retail</a>
                                        </li>
                                        <li id="menu-item-1538"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-product-ancestor current-menu-parent current-product-parent menu-item-1538">
                                            <a title="Portfolio &amp; Blog"
                                               href="https://themes.getbootstrap.com/product-category/portfolio-blog/">Portfolio &#038; Blog</a>
                                        </li>
                                        <li id="menu-item-1539"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1539">
                                            <a title="Specialty"
                                               href="https://themes.getbootstrap.com/product-category/specialty/">Specialty</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li> */}
                        {/* <li className="nav-item"><a className="nav-link"
                                                    href="https://themes.getbootstrap.com/official-themes">Why Our
                            Themes?</a></li> */}
                        
                    </ul>
                    <ul className="navbar-nav d-none d-lg-flex ml-2 order-3">
                        { navlinks }
                    </ul>
                    <ul className="navbar-nav d-lg-none">
                        <li className="nav-item-divider"></li>
                        { navlinks }
                    </ul>
                </div>
            </div>
        </nav>
)
}

export default Navigation;
