import React from 'react';
import hero from '../../assests/img/Hero_Polar.gif'

const Hero = () => {
    return (
        <>
             {/*Start Hero Section*/}
            <section id="hero" className="hero d-flex align-items-center section-bg">
                <div className="container">
                    <div className="row justify-content-between gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 data-aos="fade-up">Unlock the power of <br/>LOCATION INTELLIGENCE</h2>
                            <p data-aos="fade-up" data-aos-delay="100">Geospatial data inspired decison making</p>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <a href="#book-a-table" className="btn-book-a-table">Read More</a>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                            <img src={hero} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero Section*/}
        </>
    );
};

export default Hero;
