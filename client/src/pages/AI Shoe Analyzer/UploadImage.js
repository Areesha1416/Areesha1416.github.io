import React, { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css'; 
import Slider from "react-slick";
import "./styles.css"

const ImageCard = ({ imageUrl }) => {
    return (
      <div className="image-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
    );
  };


const UploadImage = ({ image, title, subtitle }) => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 pl--100 transition-3 mt-40 ">
            <img src={`${image}`} alt="services"  style={{ width: '150px', height: '150px' }} />
        </div>
    );
};

const UploadImagesscreen = () => {
  
    const [imagesUpload, setImagesUpload] = useState(false);
    const [detection, setDetection] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length !== 5) {
            alert('Please select exactly 5 images.');
            return;
        }

        const selected = [];
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                selected.push(e.target.result);
                if (selected.length === files.length) {
                    setSelectedImages(selected);
                    setImagesUpload(true);
                }
            };
            reader.readAsDataURL(files[i]);
        }
    };

    return (
        <>
<div id='tog-sidebar'>
   
   <div className="row mt-40">
            <div className="col-xl-12">
                <Slider className='project__slider'>
                {/* grey-bg-15 */}
                    <div className="project__item uploadheading"> 
                        <div className="project__content">
                            <div className="foropacity" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h1 style={{color:"white"}}>Product Analysis</h1>
                              
                            </div>
                        </div>
                        <div className="project__thumb m-img foropacity" >
                            Shoe Analysis: Detecting shoe flaws and evaluating condition accurately.
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
        <div>
         <section className="services__area-1 mt-40 pt-20 pb-140 p-relative  mt-40  mr-25" style={{ background: `url(assets/img/bg/wave-bg-3.png)`, backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
      
                <h2 style={{color:"#1f1841", margin:"50px"}}><center> Upload Shoe Images</center> </h2>
                <div className="container">
                  
                    {imagesUpload ? (
                        <div className="row g-2 sizing" style={{ display: "flex", justifyContent: "center" }}>
                            <main>
                            {selectedImages.map((image, index) => (
                                <ImageCard  imageUrl={image} />
                                ))}
                            </main>
           
                        </div>
                    ) : (
                        <div className="row g-2 sizing" style={{ display: "flex", justifyContent: "center" }}>
                            <main>
                            <ImageCard imageUrl="assets/img/case/1.png"  />
                            <ImageCard imageUrl="assets/img/case/2.png"  />
                            <ImageCard imageUrl="assets/img/case/3.png"  />
                            <ImageCard imageUrl="assets/img/case/4.png"  />
                            <ImageCard imageUrl="assets/img/case/5.png" />

                            </main>
                          
                        </div>
                    )}
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <input type="file" accept="image/*" multiple onChange={handleFileChange} style={{ display: "none" }} id="fileInput" />
                        <label htmlFor="fileInput" className="btn btn-primary">Upload Images</label>
                     
                    </div>
                    {imagesUpload && (
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <button className="z-btn">Start Detection</button>
                        </div>
                    )}
                    <div className="about__area-2 pt-130">
                  <div className="row">
                     <div className="col-xl-7 col-lg-6">
                        <div className="about__thumb-2 p-relative m-img">
                           <img src="assets/img/about/Analysis_.png" alt=""/>
                        </div>
                     </div>
                  {detection ? (
                         <div className="col-xl-5 col-lg-6">
                         <div className="about__content">
                               <div className="section__title section__title-3 mb-25">
                                  <h2>Shoe</h2>
                               </div>
                               <p>Welcome.</p>
                               <div className="about__list">
                                  <ul>
                                     <li><span><i><FaCheck /></i>Brand Recognition: Nike</span></li>
                                     <li><span><i><FaCheck /></i>Damage Detection: Scuff</span></li>
                                     <li><span><i><FaCheck /></i>Overall Condition Analysis: 10</span></li>
                                  </ul>
                               </div>
                             
                         </div>
                      </div>
                        
                      
                     ) : (
                        <div className="col-xl-5 col-lg-6">
                        <div className="about__content">
                              <div className="section__title section__title-3 mb-25">
                                 <h2>Enhancing Shoe Inspection</h2>
                              </div>
                              <p>In today's dynamic shoe market, stay ahead with our AI Shoe Analyzer.</p>
                              <div className="about__list">
                                 <ul>
                                    <li><span><i><FaCheck /></i>Brand Recognition</span></li>
                                    <li><span><i><FaCheck /></i>Damage Detection</span></li>
                                    <li><span><i><FaCheck /></i>Overall Condition Analysis</span></li>
                                 </ul>
                              </div>
                              <Link to="/about" className="z-btn">What we do<i><CgArrowLongRight /></i></Link>
                        </div>
                     </div>
                       
                     )}

                     {detection && (
                        <div>
                              <br/><br/>
                            <h3 style={{color:"#1f1841"}}><center>Images After Damage Detection</center> </h3>
                            <br/>
                           <div className="row g-2" style={{ display: "flex", justifyContent: "center" }}>
                           <main>
                            {selectedImages.map((image, index) => (
                                <ImageCard  imageUrl={image} />
                                ))}
                            </main>
                           </div>

                           <div style={{ textAlign: "center", marginTop: "20px" }}>
                           <br></br>
                            <button className="z-btn">Save Result</button>
                        </div>
                        </div>
                       
                    )}
                   
                  </div>
               </div>
                </div>
            </section>
         </div>

</div>
     
        </>
    );
};

export default UploadImagesscreen;
