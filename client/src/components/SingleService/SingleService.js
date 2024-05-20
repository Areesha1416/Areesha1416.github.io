import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({icon,title,para}) => {
   return (
      <>
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="services__item mb-90">
               <div className="services__icon mb-35">
                  <img src={`assets/img/icon/services/services-${icon}.png`} alt="services"/>
               </div>
               <div className="services__content">
                  <h3><Link to="">{title}</Link></h3>
                  <p>{para}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleService;