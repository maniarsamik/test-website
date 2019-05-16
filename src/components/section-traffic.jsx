import React, { Component } from 'react';
import './section-traffic.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';




class SectionTraffic extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 320,
                  settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
                },
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
                },
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
                }
              ]
        };
        return (
            <section className="traffic-section sec-pad">
                <div className="container">
                    <div className="traffic-title centered">
                        <div className="section-title">
                            <h2>Traffic</h2>
                        </div>
                        <div className="title-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp </p>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="traffic-content item">
                            <Link target="_blank" to="http://link2external.page.com" >
                                <div className="traffic-text-wrapper">
                                    <div className="traffic-icon"><FontAwesomeIcon icon="globe" spin /></div>
                                    <h2>NSW</h2>
                                    <h6>Traffic</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="traffic-content item">
                            <Link target="_blank" to="http://link2external.page.com" >
                                <div className="traffic-text-wrapper">
                                    <div className="traffic-icon"><FontAwesomeIcon icon="globe" spin /></div>
                                    <h2>NSW</h2>
                                    <h6>Traffic</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="traffic-content item">
                            <Link target="_blank" to="http://link2external.page.com" >
                                <div className="traffic-text-wrapper">
                                    <div className="traffic-icon"><FontAwesomeIcon icon="globe" spin /></div>
                                    <h2>NSW</h2>
                                    <h6>Traffic</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="traffic-content item">
                            <Link target="_blank" to="http://link2external.page.com" >
                                <div className="traffic-text-wrapper">
                                    <div className="traffic-icon"><FontAwesomeIcon icon="globe" spin /></div>
                                    <h2>NSW</h2>
                                    <h6>Traffic</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="traffic-content item">
                            <Link target="_blank" to="http://link2external.page.com" >
                                <div className="traffic-text-wrapper">
                                    <div className="traffic-icon"><FontAwesomeIcon icon="globe" spin /></div>
                                    <h2>NSW</h2>
                                    <h6>Traffic</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="traffic-content item">
                            <Link target="_blank" to="http://link2external.page.com" >
                                <div className="traffic-text-wrapper">
                                    <div className="traffic-icon"><FontAwesomeIcon icon="globe" spin /></div>
                                    <h2>NSW</h2>
                                    <h6>Traffic</h6>
                                </div>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default SectionTraffic