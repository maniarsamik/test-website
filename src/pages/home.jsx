import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import MainSlider from '../components/main-slider.jsx';
import HomeinnerSlider from '../components/home-inner-slider1.jsx';
import SectionTraffic from '../components/section-traffic.jsx';
import SectionCounter from '../components/fact-counter.jsx';
import SectionAbout from '../components/section-about-home.jsx';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Recruitimg from '../images/recruit.jpg';

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <header>
          <div className="header-upper">
            <div className="container">
              <ul className="top-left">
                <li><FontAwesomeIcon icon="clock" size='1x' style={{ padding: '0 5px 0 0' }} />Mon - Sat  9.00 - 18.00</li>
                <li><FontAwesomeIcon icon="mobile-alt" size='1x' style={{ padding: '0 5px 0 0' }} />1800 235-3256</li>
              </ul>
              <div className="top-right">
                <ul className="social-top">
                  <li><FontAwesomeIcon icon={['fab', 'facebook']} size='1x' style={{ color: '#ffffff' }} /></li>
                  <li><FontAwesomeIcon icon={['fab', 'twitter']} size='1x' style={{ color: '#ffffff' }} /></li>
                  <li><FontAwesomeIcon icon={['fab', 'google-plus']} size='1x' style={{ color: '#ffffff' }} /></li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <Navbar fixed="top" />
        <MainSlider title="Welcome" subtitle="Put somthing nice here!" />

        <section className="feature-section sec-pad">
          <div className="container">
            <div className="feature-title centered">
              <div className="section-title">
                <h2>Why Driver Zone?</h2>
              </div>
              <div className="title-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12 feature-colmun">
                <div className="single-item">
                  <div className="img-box">
                    <figure><img src={Recruitimg} /></figure>
                  </div>
                  <div className="single-content2">
                    <div className="icon-box"><FontAwesomeIcon icon="stroopwafel" size='2x' spin style={{ color: '#ffffff' }} /></div>

                    <h4>Register Driver</h4>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipis
                elit sed do eiusmod tempor incidunt labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 feature-colmun">
                <div className="single-item">
                  <div className="img-box">
                    <figure><img src={Recruitimg} /></figure>
                  </div>
                  <div className="single-content2">
                    <div className="icon-box"><FontAwesomeIcon icon="stroopwafel" size='2x' spin style={{ color: '#ffffff' }} /></div>
                    <h4>Become a Customer</h4>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipis
                elit sed do eiusmod tempor incidunt labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 feature-colmun">
                <div className="single-item">
                  <div className="img-box">
                    <figure><img src={Recruitimg} /></figure>
                  </div>
                  <div className="single-content2">
                    <div className="icon-box"><FontAwesomeIcon icon="stroopwafel" size='2x' spin style={{ color: '#ffffff' }} /></div>
                    <h4>Book Delivery</h4>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipis
                elit sed do eiusmod tempor incidunt labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-sm-12 service-colmun">
                <div className="service-title">
                  <div className="sec-title">
                    <h2>Our <span>Services</span></h2>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur
              adipisicing elit sed do eiusm temp or incididunt</p>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-sm-12 col-xs-12 service-colmun">
                <HomeinnerSlider title="Welcome" subtitle="Put somthing nice here!" />
              </div>
            </div>
          </div>
        </section>
        <SectionTraffic/>
        <SectionCounter/>
        <SectionAbout/>
        <Footer />
      </div>
    );
  }
}

export default Home