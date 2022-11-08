import React from 'react';

const WhyUS = () => {
    return (
        <>
                {/*Why Us Section */}
            <section id="why-us" className="why-us section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="row gy-4">

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="why-box">
                                <h3>Why Choose Polardot?</h3>
                                <p>
                                    Our goal is to create cost-effective, easy to use, and sustainable Geo-IT solutions which have a positive impact across both communities and businesses in Africa.
                                </p>
                                <div className="text-center">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                         {/*End Why Box*/}

                        <div className="col-lg-8 d-flex align-items-center">
                            <div className="row gy-4">

                                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-clipboard-data"></i>
                                        <h4>Data Collection</h4>
                                        <p>We integrate location data from a variety of sources such as autonomous drones, earth observation satellite imagery etc </p>
                                    </div>
                                </div>
                                 {/*End Icon Box */}

                                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-gem"></i>
                                        <h4>Generate Insights</h4>
                                        <p> Our expertise in spatial analysis will help you form a compelling narrative, both relevant to your business and drawn from actionable insight.</p>
                                    </div>
                                </div>
                                 {/*End Icon Box */}

                                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-inboxes"></i>
                                        <h4>Our Natural Language</h4>
                                        <p>Our team has extensive academic and practical knowledge in the principles of measurement, spatial analysis and map projections.</p>
                                    </div>
                                </div>
                                 {/*End Icon Box*/}

                            </div>
                        </div>

                    </div>

                </div>
            </section>
                 {/*End Why Us Section */}
        </>
    );
};

export default WhyUS;
