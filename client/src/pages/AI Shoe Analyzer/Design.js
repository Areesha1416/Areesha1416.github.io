import React from 'react';
import Login from './Login';
import './Login.css'; // Import your custom CSS file for styling


const LoginDesign = ({ setAuth }) => {
   
   
   return (
      <>
  <section className="container1">
    <section className="capabilities p-relative black-bg-1 pt-0 pb-200 fixed top-0 w-full z-50 min-h-screen" >
    <div className="capabilities__thumb p-absolute" style={{ 
            backgroundImage: `url(assets/img/capabilities/welcome.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
         
            }}></div>
            <div className="brand__shape">
               <img className="square" src="assets/img/icon/brand/square.png" alt="" />
               <img className="circle" src="assets/img/icon/brand/circle.png" alt="" />
               <img className="circle-2" src="assets/img/icon/brand/circle-2.png" alt="" />
               <img className="triangle" src="assets/img/icon/brand/trianlge.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                  <div className="container">
              
               <div className="row">
                  <div className="col-xl-12">
                 
                   <h2 className='logo'>AI Shoe Analyzer</h2>
                   <p className="slogan">Step into the Future</p>
                 
                    <Login setAuth={setAuth} />

                  </div>
               </div>
            </div>
                  </div>
               </div>
            </div>
         </section>
    </section>
      </>
   );
};

export default LoginDesign;