import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
   return (
      <>
         <section className="about__area pb-200 pt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 pr-0 col-lg-6">
                     <div className="about__thumb m-img">
                        <img src="assets/img/slider/02/8.jpg" alt="" style={{borderRadius:"12px"}}/>
                           <div className="about__shape">
                              <img src="assets/img/about/red-shape.png" alt=""/>
                           </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="about__content">
                        <div className="section__title mb-25">
                           <span>Who we are</span>
                           <h2>We Unlock True Value</h2>
                        </div>
                        <p>At AI Shoe Analyzer, we are passionate about revolutionizing the way people evaluate and understand their footwear. Our mission is to empower individuals and businesses with accurate, efficient, and insightful shoe analysis tools. Here's what sets us apart:</p>
                        <div className="about__list">
                           <ul>
                              <li ><span><i > <FaCheck/> </i>Expertise in AI Technology</span></li>
                              <li ><span><i > <FaCheck/> </i>Commitment to Accuracy</span></li>
                              <li ><span><i > <FaCheck/> </i>User-Centric Approach</span></li>
                              <li ><span><i > <FaCheck/> </i>Industry-Leading Innovation</span></li>
                              <li ><span><i > <FaCheck/> </i>Community Engagement</span></li>
                              <li ><span><i > <FaCheck/> </i>Global Reach</span></li>
                              <li ><span><i > <FaCheck/> </i>Partnerships with leading brands</span></li>
                           </ul>

                        </div>
                        <Link to="/services" className="z-btn " >What we do<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAbout;