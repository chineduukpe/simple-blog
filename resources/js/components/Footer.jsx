import React from 'react'

const Footer = (props) => {
    return (
        <footer className={'container'}>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <h3>Logo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, blanditiis corporis cum deleniti dicta distinctio dolores earum et expedita explicabo id in inventore minima natus nemo nesciunt numquam reiciendis voluptas.</p>
                </div>
                <div className="col-md-6 col-lg-4">
                    <h4>Quick links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-4">
                    <h4>Social Links</h4>
                    <div className="footer-social-wrapper"></div>
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter</p>
                </div>
            </div>
        </footer>
)
}

export default Footer;