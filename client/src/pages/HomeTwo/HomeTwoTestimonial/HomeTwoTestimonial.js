import React from 'react';
import { BiFontSize } from 'react-icons/bi';
import Slider from "react-slick";

const HomeTwoTestimonial = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: false,
      arrows: false,

   }
   const testimonialData = [
      {
         id:1,
         name:'Sarah M',
         title:'Founder and CEO',
         comment: "Before discovering AI Shoe Analyzer, I was hesitant about selling my collection of pre-loved shoes. However, their technology changed everything. The detailed analysis provided by AI Shoe Analyzer not only helped me accurately assess the condition of each pair but also gave me valuable insights into their market value. Thanks to their service, I was able to confidently list my shoes for sale and achieve great results. I highly recommend AI Shoe Analyzer to anyone looking to unlock the true value of their footwear."
      },
      {
         id:2,
         name:'Shahnewaz Sakil',
         title:'Developer',
         comment: "AI Shoe Analyzer has revolutionized our approach to selling second-hand shoes. Their accurate assessments and detailed reports have elevated the way we present our footwear to potential buyers. With their help, we've gained trust and credibility in the market, leading to increased sales and satisfied customers. AI Shoe Analyzer is an invaluable partner for any organization looking to maximize the value of their second-hand shoe inventory",
      },
   ]

   return (
      <>
         <section className="testimoinal__area gradient-bg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="testimonial__content pt-165 pb-175">
                        <div className="section__title section__title-3 mb-30">
                           <span className="white-color">Testimonials</span>
                           <h2 className="white-color">Featured Client Success Story</h2>
                        </div>

                        <Slider className='testimonial__slider pb-70' {...settings}>

                           {
                              testimonialData.map((testimonial,index) => {
                                 return <div key={index} className="testimonial__item">
                                    <p className="white-color" style={{ fontSize: '20px' }}>{testimonial.comment}</p>
                                    <div className="testimonial__content d-flex align-items-center">
                                       <div className="quote mr-20">
                                          <img src="assets/img/icon/testimonial/quote.png" alt="quote" />
                                       </div>
                                       <div className="testimonial__info">
                                          <h4 className="white-color">{testimonial.name}</h4>
                                          <span className="white-color">{testimonial.title}</span>
                                       </div>
                                    </div>

                                 </div>
                              })
                           }

                        </Slider>

                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                     <div className="testimonial__thumb m-img text-end pt-120 " >
                        <img src="assets/img/testimonial/testimonial-1.png" alt="testimonbial" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoTestimonial;