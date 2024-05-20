import React from 'react';
import HomeTwoPrice from './HomeTwoPrice/HomeTwoPrice';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import HomePricing from '../Home/HomePricing/HomePricing';
import PageHelmet from '../../components/shared/PageHelmet';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import CustomPricing from '../Home/HomePricing/CustomizePricing';

const Price = () => {
   return (
      <>
         <PageHelmet pageTitle="Home Two" />
         <CommonPageHeader title="Pricing" subtitle="Price" />
         <HomeTwoHeader/>
         <HomeTwoPrice/>
         <HomePricing/>
         <CustomPricing/>
         <HomeTwoFooter/>
       
      </>
   );
};

export default Price;