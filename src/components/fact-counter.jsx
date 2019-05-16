import React, { Component } from 'react';
import './fact-counter.css';
import CountUp from 'react-countup';

class SectionCounter extends Component {
    render() {
        return (
            <section className="fact-counter centered">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12 counter-colmun">
                            <div className="single-item">
                                <CountUp start={0} end={15} duration={3} className={"count-text counter"} />
                                <span>+</span>
                                <div class="text">Deliveries Per Year</div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 counter-colmun">
                            <div className="single-item">
                                <CountUp start={0} end={15} duration={3} className={"count-text counter"} />
                                <span>+</span>
                                <div class="text">Number of Vehicles</div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 counter-colmun">
                            <div className="single-item">
                                <CountUp start={0} end={15} duration={3} className={"count-text counter"} />
                                <span>+</span>
                                <div class="text">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionCounter