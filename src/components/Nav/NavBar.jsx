import React from 'react';
import Logo from '../../assests/img/Logo_1_transparent.png'


const NavBar = () => {
    return (
        <>
             {/*Header */}
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <a href="#" className="logo d-flex align-items-center me-auto me-lg-0">
                         {/*Uncomment the line below if you also wish to use an image logo */}
                        <img src={Logo} className="img-fluid" alt="Polardot Logo" />
                              {/*<h1>Yummy<span>.</span></h1>*/}
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Services</a></li>
                            <li><a href="#events">Packages</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                     {/*.navbar */}

                    <a className="btn-book-a-table" href="#book-a-table">Request Package</a>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>
            {/*End Header*/}
        </>
    );
};

export default NavBar;
