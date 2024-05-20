// import React from 'react';

// import Slider from 'react-slick';
// import CollapsibleTable from './ProductInspection';
// import "./styles.css";

// const Evalaute = () => {
//   return (
  
  
//   <div className="tog-sidebar">
  
//     <div className="row mt-40 ml-25">
//     <div className="col-xl-12">
//         <Slider className='project__slider'>
//             <div className="project__item grey-bg-15">
//                 <div className="project__content">
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  
//                         <h2 style={{ marginLeft: '20px', marginRight: 'auto' }}>Product Inspection</h2>
//                         <button className="btn btn-primary">View History</button>
//                     </div>
//                 </div>
//                 <div className="project__thumb m-img" style={{ marginLeft: '20px' }}>
//                     Shoe Analysis: Detecting shoe flaws and evaluating condition accurately.
//                 </div>
//             </div>
//         </Slider>
//     </div>
// </div>
    
//     </div>

//   );
// }

// export default Evalaute ;

import React from 'react';
import "./style.css"

const ImageCard = ({ imageUrl }) => {
  return (
    <div className="image-card" style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>
  );
};

const ImageGallery = () => {
  return (
    <main>
      <ImageCard imageUrl="https://i.pinimg.com/originals/d1/7d/e1/d17de177f36718c749d89b6a4e9831e6.jpg" />
      <ImageCard imageUrl="https://i.pinimg.com/564x/8f/cd/a8/8fcda8819f83d06f108fb770f5c6e4bb.jpg" />
      <ImageCard imageUrl="https://i.pinimg.com/736x/a6/f5/e3/a6f5e367389f499ad9b4693c9153c1f8.jpg" />
      <ImageCard imageUrl="https://i.pinimg.com/564x/5e/b9/36/5eb9366f2e69b351c57ef2aac8a790c8.jpg" />
    </main>
  );
};

export default ImageGallery;

