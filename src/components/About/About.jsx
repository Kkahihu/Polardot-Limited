import React from 'react';
import about from '../../assests/img/about-2.jpg';

const About = () => {
    return (
        <>
                {/*About Section*/}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>About Us</h2>
                        <p>Learn More <span>About Us</span></p>
                    </div>

                    <div className="row gy-4">
                        {/* eslint-disable-next-line no-template-curly-in-string */}
                        <div className="col-lg-7 position-relative about-img" style={{backgroundImage: `url(${about})`, }}  data-aos="fade-up" data-aos-delay="150">
                            {/*<div className="call-us position-absolute">*/}
                            {/*    <h4></h4>*/}
                            {/*    <p>+1 5589 55488 55</p>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                            <div className="content ps-0 ps-lg-5">
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                </p>

                                <div className="position-relative mt-4">
                                    <img src={about} className="img-fluid" alt="" />
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
                 {/*End About Section*/}
        </>
    );
};

export default About;
