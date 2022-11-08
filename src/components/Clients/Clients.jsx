import React from 'react';
import client_1 from '../../assests/img/img/clients/client-1.png';
import client_2 from '../../assests/img/img/clients/client-2.png';
import client_3 from '../../assests/img/img/clients/client-3.png';
import client_4 from '../../assests/img/img/clients/client-4.png';
import client_5 from '../../assests/img/img/clients/client-5.jpg';
import client_6 from '../../assests/img/img/clients/client-6.jpeg';

const Clients = () => {
    return (
        <>
                 {/*Clients Section */}
            <section id="clients" className="clients section">
                <div className="container">

                    <div className="row" data-aos="zoom-in">

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client_1} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client_2} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client_3} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client_4} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client_5} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client_6} className="img-fluid" alt="" />
                        </div>

                    </div>

                </div>
            </section>
                 {/*End Cliens Section */}
        </>
    );
};

export default Clients;
