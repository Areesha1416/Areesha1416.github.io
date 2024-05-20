import React from 'react';
import { Link } from 'react-router-dom';
import UploadImagesscreen from './UploadImage';
import PageHelmet from '../../components/shared/PageHelmet';
import Sidebar from './Sidebar';

const UploadScreen = () => {
   

    return (
        <>
            {/* <PageHelmet pageTitle="Home Three" /> */}
            <Sidebar/>
            <UploadImagesscreen />
        </>
    );
};

export default UploadScreen;
