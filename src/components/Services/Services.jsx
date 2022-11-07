import React from 'react';

const Services = () => {
    return (
        <>
                {/*Chefs Section*/}
            <section id="chefs" className="chefs section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Services</h2>
                        <p>Our <span>Amazing</span> Services</p>
                    </div>

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                                        {/*<div className="social">*/}
                                        {/*    <a href=""><i className="bi bi-twitter"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-facebook"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-instagram"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-linkedin"></i></a>*/}
                                        {/*</div>*/}
                                </div>
                                <div className="member-info">
                                    <h4>Drone and satellite imagery-based mapping</h4>
                                    {/*<span>Master Chef</span>*/}
                                    <p>We provide a wide array of mapping products utilizing autonomous drones with sensors, earth observation satellite imagery, and global positioning systems (GPS) sensors depending on the client's use case and scale of work.</p>
                                </div>
                            </div>
                        </div>
                             {/*End Chefs Member*/}

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                                        {/*<div className="social">*/}
                                        {/*    <a href=""><i className="bi bi-twitter"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-facebook"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-instagram"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-linkedin"></i></a>*/}
                                        {/*</div>*/}
                                </div>
                                <div className="member-info">
                                    <h4>Geospatial data visualization and analytics</h4>
                                    {/*<span>Patissier</span>*/}
                                    <p>With our spatial analysis and mapping expertise, we provide powerful tools to model and analyze spatial data, enabling you to identify relationships and trends that would not otherwise be apparent.</p>
                                </div>
                            </div>
                        </div>
                             {/*End Chefs Member */}

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt=""/>
                                        {/*<div className="social">*/}
                                        {/*    <a href=""><i className="bi bi-twitter"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-facebook"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-instagram"></i></a>*/}
                                        {/*    <a href=""><i className="bi bi-linkedin"></i></a>*/}
                                        {/*</div>*/}
                                </div>
                                <div className="member-info">
                                    <h4>Geospatial Artificial Intelligence (Geo-AI)</h4>
                                    {/*<span>Cook</span>*/}
                                    <p>We combine geospatial big data with artificial intelligence applications for high-performance computing for data mining, spatial big data analysis, and automatic feature extraction from satellite/drone images.</p>
                                </div>
                            </div>
                        </div>
                         {/*End Chefs Member */}

                    </div>

                </div>
            </section>
                 {/*End Chefs Section*/}
        </>
    );
};

export default Services;
