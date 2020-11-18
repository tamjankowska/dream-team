import React, {useState} from 'react';
import './GamesBanner.css';
import BannerImage from '../bannerimage/BannerImage';
// import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import spiderman from '../images/spiderman.jpg';
import demonsSouls from '../images/demonsSouls.jpg';
import fifa21 from '../images/fifa21.jpg';
import codBlackOps from '../images/codBlackOps.jpg';
import acValhalla from '../images/acValhalla.jpeg';

const lightboximages = [
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/marvel-spider-man-miles-morales-iz-1920x1080-1-920x518.jpg",
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/11/demons_souls_ps5-2-920x518.jpg",
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/10/EjomFscWAAEG3pr-920x518.jpg",
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/10/f5611b5a-0405-4eb3-ad13-acabc6310b7f-920x518.jpg",
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/04/EW3GS_4XkAA-ffB-920x518.jpeg"
]

class GamesBanner extends React.Component {

    state = {
        images: [
            { bannerImage: spiderman },
            { bannerImage: demonsSouls },
            { bannerImage: fifa21 },
            { bannerImage: codBlackOps },
            { bannerImage: acValhalla }
        ],
        isOpen: false,
        photoIndex: 0
    }

    render() {

        const allImages = this.state.images.map((image) => {
            return (
                <BannerImage bannerImage={image.bannerImage} />
            )
        });

        const { photoIndex, isOpen } = this.state;

        return (
            <div className="games-banner-container">
                <div className="games-container">
                    <button className="stories-button" type="button" onClick={() => this.setState({
                        isOpen: true
                    })}>                    
                        <div className="image-frame">
                            { allImages }
                        </div>
                    </button>
                    {isOpen && (
                        <Lightbox
                            mainSrc={lightboximages[photoIndex]}
                            nextSrc={lightboximages[(photoIndex + 1) % lightboximages.length]}
                            prevSrc={lightboximages[(photoIndex + lightboximages.length - 1) % lightboximages.length]}
                            onCloseRequest={() => this.setState({
                                isOpen: false
                            })}
                            onMovePrevRequest={() => this.setState({
                                photoIndex: (photoIndex + lightboximages.length - 1) % lightboximages.length,
                            })
                        }
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % lightboximages.length,
                        })
                    }
                    />
                    )}
                </div>
            </div>
        )
    }
}

export default GamesBanner;