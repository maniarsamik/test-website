import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './section-about-home.css';
class SectionAbout extends Component {
    render() {
        return (
            <section className="about-home-section sec-pad">
                <div className="container">
                    <div className="traffic-title centered">
                        <div className="section-title">
                            <h2>About</h2>
                        </div>
                        <div className="title-text mb-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp </p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp, Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp, Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp, Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp, Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm temp. </p>
                        <div className="button mt-5"> <Link target="_blank" to="https://www.google.com/" className="btn-one style-one">Read More </Link></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionAbout