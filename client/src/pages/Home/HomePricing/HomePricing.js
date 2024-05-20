import React from 'react';
import SinglePrice from '../../../components/SinglePrice/SinglePrice';

const HomePricing = () => {
   const feature1 = [
      "150 API Requests",
      "15-day Historical API Response",
   ];
   const feature2 = [
      "300 API Requests",
      "30-day Historical API Response",
   ];
   const feature3 = [
      "900 API Requests",
      "60-day Historical API Response",
   ];
   const feature4 = [
      "4k API Requests ",
      "5-month Historical API Response",
   ];
   const feature5 = [
      "10k API Requests Per Month",
      "6-month Historical API Response",
   ];
   const feature6 = [
      "Unlimited API Requests",
      "1-year Historical API Response",
   ];
   return (
      <>
         <section className="price__area pt-115 pb-75">
            <div className="container">
               <div className="row">

                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 mb-85 text-center">
                      
                        <h2>Flexible API Pricing Packages</h2>
                        {/* <p>join and get 20% off coupon</p> */}
                     </div>
                     <div className="price__tab d-flex justify-content-center mb-50">
                        <div className="price__offer">
                           <span>Save 20%</span>
                           <img src="assets/img/icon/price/line.png" alt=""/>
                        </div>
                        <ul className="nav nav-tabs justify-content-center" id="price-tab" role="tablist">

                            <li className="nav-item">
                              <button className="nav-link active" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" role="tab" aria-controls="yearly" aria-selected="true">Yearly</button>
                           </li>

                           <li className="nav-item">
                              <button className="nav-link" id="monthly-tab" data-bs-toggle="tab"
                                 data-bs-target="#monthly" role="tab" aria-controls="monthly"
                                 aria-selected="false">Monthly</button>
                           </li>

                        </ul>
                     </div>
                  </div>
               </div>

               <div className="price__tab-content">
                  <div className="tab-content" id="price-tab-content">
                     <div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                        <div className="row">

                           <SinglePrice title="Starter Plan" price="30"  features = {feature1}/>
                           <SinglePrice title="Pro Plan" price="55" active="active" features = {feature2}/>
                           <SinglePrice title="VIP Plan" price="80" features = {feature3} />

                        </div>
                     </div>

                     <div className="tab-pane fade show active" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                        <div className="row">

                           <SinglePrice title="Premium Plan" price="720" features = {feature4}/>
                           <SinglePrice title="Elite Plan" price="2375" active="active" features = {feature5} />
                           <SinglePrice title="Ultimate Plan" price="4999" features = {feature6}/>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomePricing;