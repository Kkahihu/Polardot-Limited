import React from 'react';

const Products = () => {
    return (
       <>
             {/*Features Section*/}
           <section id="features" className="features">
               <div className="container">
                   <div className="section-header">
                       <h2>Packages</h2>
                       <p>Our <span>Affordable</span> Packages</p>
                   </div>

                   <div className="row gy-4 align-items-center features-item" data-aos="fade-up">

                       <div className="col-md-5">
                           <img src="assets/img/features-1.jpg" className="img-fluid" alt="" />
                       </div>
                       <div className="col-md-7">
                           <h3>Polardot Photogrammetry</h3>
                           <p className="fst-italic">
                               Our solution facilitates generation of Orthomosaics, Point Clouds, Elevation Models, 3D Models, Plant Health Index Maps, Contours and Thermal maps from drone imagery using using high performance clustered servers powered by Polardot Photogrammetry Engine.
                           </p>
                           <ul>
                               <li><i className="bi bi-check"></i> Reduce Costs and Time.</li>
                               <li><i className="bi bi-check"></i> Survey-grade results.</li>
                               <li><i className="bi bi-check"></i> Complete control over your project.</li>
                               <li><i className="bi bi-check"></i> Share Results Instantly.</li>
                           </ul>
                           <div className="text-center">
                               <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                           </div>
                       </div>
                   </div>
                     {/*Features Item */}

                   <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                       <div className="col-md-5 order-1 order-md-2">
                           <img src="assets/img/features-2.jpg" className="img-fluid" alt="" />
                       </div>
                       <div className="col-md-7 order-2 order-md-1">
                           <h3>Polardot Photogrammetry</h3>
                           <p className="fst-italic">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                               magna aliqua.
                           </p>
                           <p>
                               Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                               culpa qui officia deserunt mollit anim id est laborum
                           </p>
                       </div>
                   </div>
                     {/*Features Item */}

                   <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                       <div className="col-md-5">
                           <img src="assets/img/features-3.jpg" className="img-fluid" alt="" />
                       </div>
                       <div className="col-md-7">
                           <h3>Polardot Photogrammetry</h3>
                           <p>Our solution facilitates generation of Orthomosaics, Point Clouds, Elevation Models, 3D Models, Plant Health Index Maps, Contours and Thermal maps from drone imagery using using high performance clustered servers powered by Polardot Photogrammetry Engine.</p>
                           <ul>
                               <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                               <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                               <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                           </ul>
                       </div>
                   </div>
                        {/*Features Item */}
               </div>
           </section>
                {/*End Features Section */}
       </>
    );
};

export default Products;
