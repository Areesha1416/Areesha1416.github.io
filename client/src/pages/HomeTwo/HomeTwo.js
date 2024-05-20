import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeTwoCounter from './HomeTwoCounter/HomeTwoCounter';
import HomeTwoExpertArea from './HomeTwoExpertArea/HomeTwoExpertArea';
import HomeTwoFaq from './HomeTwoFaq/HomeTwoFaq';
import HomeTwoFeatures from './HomeTwoFeatures/HomeTwoFeatures';
import HomeTwoFooter from './HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from './HomeTwoHeader/HomeTwoHeader';
import HomeTwoHeroSlider from './HomeTwoHeroSlider/HomeTwoHeroSlider';
import HomeTwoTestimonial from './HomeTwoTestimonial/HomeTwoTestimonial';
import HomePricing from '../Home/HomePricing/HomePricing';

const HomeTwo = () => {
   return (
      <>
         <PageHelmet pageTitle="Home Two" />
         <HomeTwoHeader/>
         <HomeTwoHeroSlider/>
         <HomeTwoFeatures/>
         <HomeTwoFaq/>  
         <HomeTwoExpertArea/>
         <HomeTwoTestimonial/>
         <HomeTwoCounter/>
         <HomePricing/>
         <CommonCtaArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default HomeTwo;