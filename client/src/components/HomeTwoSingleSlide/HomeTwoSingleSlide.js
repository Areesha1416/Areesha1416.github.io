import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';
import VideoPopup from '../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../hooks/useGlobalContext';

const HomeTwoSingleSlide = ({ slider_class,content_class, attr_1, attr_2, attr_3 = "Let AI Shoe Analyzer Be Your Trusted Guide in Assessing the Condition, Quality,",attr_4="and Brand of Your Beloved Footwear",btn_text}) => {
   const { setIsVideoOpen} = useGlobalContext();
   return (
      <>
             <VideoPopup videoId="yJg-Y5byMMw" />
         <div className="single-slider single-slider-2 slider__height slider__height-2 d-flex align-items-center" style={{
            background: `url(assets/img/slider/02/3.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

            <div className="container">
               <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2">
                     <div className="slider__play">
                            <button onClick={() => setIsVideoOpen(true)} className="slider__play-btn">
                        <i> <FiPlay/> </i></button>
                     </div>
                  </div>
                  <div className={`${slider_class}`}>
                     <div className={`slider__content slider__content-2 ${content_class && content_class}`}>
                         {attr_1 && attr_1}
                         {attr_2}
                        <p className=''>{attr_3}<br/>{attr_4}</p>
                        <div className="slider__btn">
                           <Link to="/contact" className="z-btn z-btn-transparent">{btn_text}</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleSlide;