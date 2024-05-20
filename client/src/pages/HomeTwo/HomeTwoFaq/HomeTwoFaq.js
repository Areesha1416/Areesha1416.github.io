import React from 'react';

const HomeTwoFaq = () => {
   return (
      <>
         <section className="faq__area p-relative pt-135 pb-120 grey-bg-12">
            <div className="faq__thumb" style={{ background: `url(assets/img/faq/faq-5.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                     <div className="faq__wrapper">
                        <div className="section__title section__title-3 mb-25 wow fadeInUp" data-wow-delay=".2s">
                           
                           <h2>Why <br/> Choose Us</h2>
                        </div>

                        <div className="accordion" id="accordionExample">

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingOne">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Precision in Evaluation
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                 With AI-driven analysis, you can trust the reliability of the assessment of your shoe's condition. Our technology ensures thorough and accurate evaluations, providing you with confidence in the results.
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingTwo">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Efficiency in Processing
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                 Our system delivers results swiftly, saving you valuable time and effort. Whether you're buying or selling pre-loved shoes, you can rely on us to provide prompt findings, allowing you to proceed with your transactions efficiently.
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingThree">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Confidence in Decision-Making
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                 Our comprehensive evaluations enable you to make informed decisions when buying or selling pre-loved shoes. With detailed insights into the condition and authenticity of the footwear, you can proceed with confidence, knowing that you have all the information you need.
                                 </div>
                              </div>
                              
                           </div>
                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingFour">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Advocating for Sustainability
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                 By promoting responsible footwear consumption and encouraging a thriving pre-loved shoe market, we contribute to a more sustainable future. Join us in fostering a culture of sustainability by embracing pre-loved footwear options.
                                 </div>
                              </div>
                              
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoFaq;