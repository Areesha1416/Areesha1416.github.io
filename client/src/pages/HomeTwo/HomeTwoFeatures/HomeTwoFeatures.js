import React from 'react';
import { BiLock } from 'react-icons/bi';
import { CgArrowLongRight } from 'react-icons/cg';
import { IoDocumentTextOutline,IoSearchSharp } from 'react-icons/io5';
import { IoCloudUpload } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi";
import { Md360 } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";
import { Link } from 'react-router-dom';
import HomeTwoSingleFeature from '../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature';

const HomeTwoFeatures = () => {
   return (
      <>
         <section className="features__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="features__content-left">
                        <div className="section__title section__title-h2 mb-25">
                           
                           <h2>How <br/>It Works</h2>
                        </div>
                        <p>Discover the Seamless Process of Evaluating Your Shoes with AI Precision.</p>
                        <Link to="/about" className="z-btn">Step by step guide<i><CgArrowLongRight/></i></Link>
                     </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6">
                     <div className="features__content-right">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<IoCloudUpload />} image = "assets/img/features/02/upload.jpg" title="1. Upload Shoe Photos" para={ "Upload clear and detailed photos of your shoes."} />
                              <HomeTwoSingleFeature icon={<Md360  />} image = "assets/img/features/02/features-2.jpg" title="3. Angle Verification" para={ "Ensure all angles of the shoe are provided for comprehensive analysis."}/>
                           </div>

                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<  IoSearchSharp />} image = "assets/img/features/02/verify.png" title="2. Image Verification" para={ "Our system confirms that uploaded images depict shoes, using advanced image recognition technology."} />
                              <HomeTwoSingleFeature icon={<IoSparkles />} image = "assets/img/features/02/ai.png" title="4. AI Analysis" para={ "Examines the photos, assessing various aspects such as condition and brand along with personalized modification option."}/>

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

export default HomeTwoFeatures;