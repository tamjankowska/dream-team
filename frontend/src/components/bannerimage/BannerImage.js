import React from 'react';
import './BannerImage.css';

const BannerImage = (props) => {
    return (
        <div className="bannerimg">
            <img className="bannerImage" src={props.bannerImage} alt={props.altImage}/>
        </div>
    )
}

export default BannerImage;