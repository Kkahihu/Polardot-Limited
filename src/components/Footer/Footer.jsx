import React from 'react';

const Footer = () => {
    return (
        <>
                 {/*Footer */}
            <footer id="footer" className="footer">

                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-geo-alt icon"></i>
                            <div>
                                <h4>Address</h4>
                                <p>
                                    1870 Sliproad, Off Waiyaki Way<br/>
                                    Westlands, Nairobi - KE<br/>
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-telephone icon"></i>
                            <div>
                                <h4>Contact Us</h4>
                                <p>
                                    <strong>Phone:</strong> 0722986416 <br/>
                                    <strong>Email:</strong> info@polardot.co.ke<br/>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-clock icon"></i>
                            <div>
                                <h4>Opening Hours</h4>
                                <p>
                                    <strong>Mon-Fri: 11AM</strong> - 17PM<br/>
                                    Saturday - Sunday: Closed
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Follow Us</h4>
                            <div className="social-links d-flex">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Polardot Limited</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://github.com/Kkahihu">Kelvin Kahihu</a>
                    </div>
                </div>

            </footer>
             {/*End Footer*/}
        </>
    );
};

export default Footer;
