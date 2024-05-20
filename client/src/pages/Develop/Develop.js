import React from 'react';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';


const Develop = () => {
   return (
      <>
         <PageHelmet pageTitle="Home Two" />
         <CommonPageHeader title="Develop" subtitle="Develop" />
         <HomeTwoHeader/>
        
         <HomeTwoFooter/>
       
      </>
   );
};

export default Develop;