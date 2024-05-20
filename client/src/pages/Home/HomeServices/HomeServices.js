import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s">
                        <span>Our Services</span>
                        <h2>Discover How We Can Meet Your Footwear Evaluation Needs</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleService icon="12" title="Damage Detection" para="Scans your shoe photos to detect any signs of damage, wear, or imperfections. From scuffs and scratches to structural issues, we provide detailed insights into the condition of your footwear." />
                  <SingleService icon="13" title="Brand Detection" para="Our advanced algorithms accurately detect and verify the brand of your shoes, ensuring transparency and peace of mind." />
                  <SingleService icon="2" title="Assessment Report" para="Receive a comprehensive assessment report detailing the condition and brand of your shoes, empowering you to make informed decisions about your footwear."/>
                  <SingleService icon="7" title="Report Modification" para="Tailor your evaluation report to fit your specific needs. From additional details to custom modifications, we personalize every aspect to ensure it meets your requirements."/>
                  <SingleService icon="14" title="Separate Dashboards" para="Effortlessly manage your shoe evaluations with separate uploader and evaluator dashboards. Track progress in real-time and access reports seamlessly with our intuitive interface." />
                  <SingleService icon="15" title="History Maintenance" para="Keep track of your shoe evaluation history for easy reference and comparison. Access previous assessment reports and modifications to track the condition and value of your footwear over time."/>
                  <SingleService icon="16" title="360° Evaluation" para="Our AI technology ensures a thorough evaluation from every angle, providing comprehensive insights into your footwear's condition, brand, and value."/>
                  <SingleService icon="17" title="Fast Support Solutions" para="Get quick assistance and expert guidance from our dedicated support team whenever you need it. We're here to ensure your footwear evaluation process runs smoothly."/>
                  

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;