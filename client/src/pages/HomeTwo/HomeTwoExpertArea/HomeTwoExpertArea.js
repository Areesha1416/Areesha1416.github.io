import React from 'react';
import SingleExpartContent from '../../../components/SingleExpartContent/SingleExpartContent';

const HomeTwoExpertArea = () => {
   return (
      <>
         <section className="expart__area pt-200 wow fadeInUp" data-wow-delay=".4s">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="expart__wrapper">
                        <div className="expart__nav">
                           <ul className="nav nav-pills justify-content-end" id="expart-tab" role="tablist">
                              <li className="nav-item text-center">
                                 <a className="nav-link active" id="philosophy-tab" data-bs-toggle="pill" href="#philosophy" role="tab" aria-controls="philosophy" aria-selected="true">Demo</a>
                              </li>
                              <li className="nav-item text-center">
                                 <a className="nav-link" id="work-tab" data-bs-toggle="pill" href="#work" role="tab" aria-controls="work" aria-selected="false">Trial</a>
                              </li>
                           </ul>
                        </div>
                        <div className="expart__tab">
                           <div className="tab-content" id="expart-Content">
                              <div className="tab-pane fade show active" id="philosophy" role="tabpanel" aria-labelledby="philosophy-tab">
                                 <SingleExpartContent image="1" head1={"Our experts will"} head2={"guide you"} para={"Ready to experience the power of AI Shoe Analyzer firsthand? Sign up now for a personalized demo, where our expert will guide you through our innovative platform. Get ready to unlock the true value of your footwear with AI Shoe Analyzer. Schedule your demo today!"} btn={"Get a Demo"}/>
                              </div>
                              <div className="tab-pane fade" id="work" role="tabpanel" aria-labelledby="work-tab">
                                 <SingleExpartContent image="2" head1={"Try It Out"} head2={"Now"} para={"Experience the Power of AI Shoe Analyzer Today!"} btn={"Start a Trial"}/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
         </section>
      </>
   );
};

export default HomeTwoExpertArea;