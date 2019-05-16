import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Footer extends Component {
    render() {
        return (
            <footer className="main-footer sec-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-6 col-xs-12 footer-colmun">
                            <div className="logo-widget footer-widget">
                                <div className="footer-logo"> <a href="index-2.html"></a> </div>
                                <div className="text">
                                    <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullam
              aboris nisi ut aliquip.</p>
                                </div>
                                <div className="button"> <a href="#" className="btn-one style-one radi">Subscribe</a> </div>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-6 col-xs-12 footer-colmun">
                            <div className="link-widget footer-widget">
                                <div className="footer-title">
                                    <h4>Quick Link</h4>
                                </div>
                                <ul className="list">
                                    <li><Link target="_blank" to="https://www.google.com/" >Company History</Link></li>
                                    <li><Link target="_blank" to="https://www.google.com/" >About Us </Link></li>
                                    <li><Link target="_blank" to="https://www.google.com/" >Contact Us</Link></li>
                                    <li><Link target="_blank" to="https://www.google.com/" >Services</Link></li>
                                    <li><Link target="_blank" to="https://www.google.com/" >Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 footer-colmun">
                            <div className="logo-widget footer-widget">
                                <div className="footer-title">
                                    <h4>Address</h4>
                                </div>
                                <p>5, Lorem Ipsum, <br /> Sydney, <br /> Australia</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 footer-colmun">
                            <div className="subscribe-widget footer-widget">
                                <div className="footer-title">
                                    <h4>NewsLetter</h4>
                                </div>
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet, consect
              etur adipisicing.</p>
                                </div>
                                <div className="input-box">

                                </div>
                                <ul className="footer-social">
                                    <li><Link target="_blank" to="https://www.google.com/" ><FontAwesomeIcon icon={['fab', 'facebook']}/></Link></li>
                                    <li><Link target="_blank" to="https://www.google.com/" ><FontAwesomeIcon icon={['fab', 'twitter']}/></Link></li>
                                    <li><Link target="_blank" to="https://www.google.com/" ><FontAwesomeIcon icon={['fab', 'google-plus']}/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer