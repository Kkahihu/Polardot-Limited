import React, {useEffect} from 'react';
import NavBar from "../components/Nav/NavBar";
import '../assests/css/main.css'
import Hero from "../components/Hero/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "../components/About/About";
import WhyUS from "../components/Why/WhyUs";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import Product from "../components/Products/Product";

const Home = () => {

    useEffect(() => {
        return () => {
            AOS.init();
        };
    }, []);

    return (
       <>
           <NavBar />
           <Hero />

           <main id='main'>
               <About />
               <WhyUS />
               <Services />
               <Product />
               <Contact />
           </main>

           <Footer />
       </>
    );
};

export default Home;
