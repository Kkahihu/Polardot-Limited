import React from 'react';
import Logo from '../../assests/img/Logo_1_transparent.png'


const NavBar = () => {
    return (
        <>
             {/*Header */}
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="logo d-flex align-items-center me-auto me-lg-0">
                         {/*Uncomment the line below if you also wish to use an image logo */}
                        <img src={Logo} className="img-fluid" alt="Polardot Logo" />
                              {/*<h1>Yummy<span>.</span></h1>*/}
                    </a>

                    <nav id="navbar" className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a class="nav-link active" aria-current="page" href="#hero">Home</a></li>
                                <li className="nav-item"><a class="nav-link"  href="#about">About</a></li>
                                <li className="nav-item"><a class="nav-link"  href="#menu">Services</a></li>
                                <li className="nav-item"><a class="nav-link"  href="#events">Packages</a></li>
                                <li className="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
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
