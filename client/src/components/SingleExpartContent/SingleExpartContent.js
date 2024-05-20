import React from 'react';
import { Link } from 'react-router-dom';

const SingleExpartContent = ({image,head1, head2,para,btn}) => {
    return (
        <>
            <div className="expart__tab-content white-bg">
                <div className="expart__thumb" style={{ background: `url(assets/img/expart/expart-${image}.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-6">
                        <div className="expart__content">
                            <h3>{head1} <br /> {head2}</h3>
                            <p>{para}</p>
                            <Link to="/about" className="z-btn">{btn}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleExpartContent;