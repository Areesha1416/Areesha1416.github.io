import React from 'react';
import Register from './Signup_';
import './Login.css'; // Import your custom CSS file for styling


const SignUpDesign = ({setAuth}) => {
   
   
   return (
      <>
  <section className="container1">
    <section className="p-relative pt-0" >
            <div className="container">
                  <div className="brand__shape">
               <img className="square" src="assets/img/icon/brand/square.png" alt="" />
               <img className="circle" src="assets/img/icon/brand/circle.png" alt="" />
               <img className="circle-2" src="assets/img/icon/brand/circle-2.png" alt="" />
               <img className="triangle" src="assets/img/icon/brand/trianlge.png" alt="" />
            </div>
               <div className="row">
                
                  <div className="col-xl-12 col-lg-1">
                  <div className="container">
              
               <div className="row">
                  <div className="col-xl-12">
                  <h2 className='logo1'>AI Shoe Analyzer</h2>
                   <p className="slogan">Step into the Future</p>
                    <Register setAuth={setAuth}/>

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

export default SignUpDesign;