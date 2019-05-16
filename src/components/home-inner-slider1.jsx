import React, { Component } from 'react';
import './home-inner-slider1.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class HomeinnerSlider extends React.Component {
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
      <Slider {...settings}>
        <div className="single-item item">
          <div className="icon-box"><FontAwesomeIcon icon="stroopwafel" size='4x' style={{ color: '#f6b129' }} /></div>
          <h4><a href="service-details.html">People</a></h4>
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmotempor inc
                ididunt ut labore</p>
          </div>
        </div>
        <div class="single-item item">
          <div class="icon-box"><FontAwesomeIcon icon="stroopwafel" size='4x' style={{ color: '#f6b129' }} /></div>
          <h4><a href="service-details.html">Process</a></h4>
          <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmotempor inc
                ididunt ut labore</p>
          </div>
        </div>
        <div class="single-item item">
          <div class="icon-box"><FontAwesomeIcon icon="stroopwafel" size='4x' style={{ color: '#f6b129' }} /></div>
          <h4><a href="service-details.html">Technology</a></h4>
          <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmotempor inc
                ididunt ut labore</p>
          </div>
        </div>
        <div class="single-item item">
          <div class="icon-box"><FontAwesomeIcon icon="stroopwafel" size='4x' style={{ color: '#f6b129' }} /></div>
          <h4><a href="service-details.html">Technology</a></h4>
          <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmotempor inc
                ididunt ut labore</p>
          </div>
        </div>
        <div class="single-item item">
          <div class="icon-box"><FontAwesomeIcon icon="stroopwafel" size='4x' style={{ color: '#f6b129' }} /></div>
          <h4><a href="service-details.html">Technology</a></h4>
          <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmotempor inc
                ididunt ut labore</p>
          </div>
        </div>
      </Slider>
    );
  }
}
export default HomeinnerSlider