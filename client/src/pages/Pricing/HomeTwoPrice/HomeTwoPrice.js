import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const HomeTwoPrice = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
      ]
   }
   const testimonialData = [
      {
         id: 1,
         title: <h3><Link to="">Streamlined Web Presence </Link></h3>,
         subtitle: <p>Avail our website services at no cost except for API charges.<br/><br/><br/></p>,
         img:"assets/img/project/delete-1.png",
      },
      {
         id: 2,
         title: <h3><Link to="">Customized Modules </Link></h3>,
         subtitle:<p>Tailor-made modules to suit your requirements, with charges contingent on technology, project timeline, screen designs, and optional system integration.</p>,
         img:"assets/img/project/delete-2.png",
      },
    
   ]
   return (
      <>
         <section className="project__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7">
                     <div className="section-title section__title-3 mb-70">
                        <h2>Tailored Solutions for Your Specific Needs</h2>
                        <p>Crafting solutions that fit your unique requirements and aspirations,<br/> because one size doesn't fit all.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">

                     <Slider className='project__slider' {...settings}>

                        {
                           testimonialData.map((testimonial, index) => {
                              return <div key={index} className="project__item grey-bg-19">
                                 <div className="project__content">
                                    <div className="project__no">
                                       <h5>{testimonial.id}</h5>
                                    </div>
                                    {testimonial.title}
                                 
                                 </div>
                                
                                 <div className="project__thumb m-img">
                                 {testimonial.subtitle}
                                    <img src={testimonial.img} alt="" />
                                 </div>
                              </div>
                           })
                        }

                     </Slider>

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoPrice;