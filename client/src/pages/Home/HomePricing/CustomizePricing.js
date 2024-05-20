import React from 'react';
import SinglePrice from '../../../components/SinglePrice/SinglePrice';

const CustomPricing = () => {
   const feature1 = [
      "Time Period: 3 months (minimum)",
      "3 screens",
      "Technology of your choice",
      "Design of your choice",
   ];
   const feature2 = [
      "Time Period: 4 months (minimum)",
      "Seamless Application Integration",
      "AI Shoe Analyzer Integration",
      "Database Attachment"
   ];
   const feature3 = [
      "Purchase Pre-built Module",
      "200 Free API Responses",
      "Expert Design Included",
      "React-Powered Solution"
   ];

   return (
      <>
         <section className="price__area pt-115 pb-75">
            <div className="container">
               <div className="row">

                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 mb-85 text-center">
                      
                        <h2>Flexible Development Pricing Packages</h2>
                        {/* <p>join and get 20% off coupon</p> */}
                     </div>
                    
                  </div>
               </div>

               <div className="price__tab-content">
                  <div className="tab-content" id="price-tab-content">
                     <div className="tab-pane fade show active" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                        <div className="row">

                           <SinglePrice title="Customize Plan" price="399"  features = {feature1}/>
                           <SinglePrice title="Integarted Plan" price="499" active="active" features = {feature2}/>
                           <SinglePrice title="Special Offer" price="299" features = {feature3} />
                          
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default CustomPricing;
