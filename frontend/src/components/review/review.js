import React, { useEffect, useState } from "react";
import axios from 'axios';
import './review.css';
import Violence from '.././faq/images/violence.jpg';
import BadLanguage from '../faq/images/badlanguage.jpg';
import Gambling from '../faq/images/gambling.jpg';
import SexualContent from '../faq/images/sexualcontent.jpg';
import Drugs from '../faq/images/drugs.jpg';


const Review = () => {

    const [reviews, setReviews] = useState([]);

    const getResponse = () => {
        let gameID = sessionStorage.getItem("gameID");
        
        axios.get(`http://localhost:5000/reviews/game/${gameID}`).then((res) => {
            const dates = {
                first: res.data.reviews[0].review.dateReviewed,
                second: res.data.reviews[1].review.dateReviewed
            }
            if (dates) {
               
     
            }
            setReviews(res.data.reviews);
        }); 

        
    };

    useEffect(() => {
        if (reviews.length == 0) {
            getResponse();
        }
    });
    
    return (
        <div className = 'reviews'>  
            {reviews.map((review, index) =>
                <div className = "review">
                    <h1 className = 'gameTitle' key = {index}>{review.review.gameTitle}</h1>
                    <h2 className = 'reviewTitle' key = {index}>{review.review.title}</h2>
                    <h3 className = 'username' key = {index}>{review.username}</h3>
                    <h4 className = "category" key = {index}>{review.category}</h4>
                    <p className = 'reviewText' key = {index}>{review.review.review}</p>
                    <h4 className = 'reviewerScore' key = {index}>{review.review.reviewerScore}</h4>
                    <a className = 'linkToBuy' key = {index} href = {review.review.linkToBuy}> Link to buy </a>
              
                    <h4 className = "ageRating" key = {index}>PEGI age rating:<br />{review.ageRating}</h4>
                    <h4 className = "violence" key = {index}><img src = {Violence} /> <br />{review.violence}</h4>
                    <h4 className = "sexAndNudity" key = {index}><img src = {SexualContent} /> <br />{review.sexAndNudity}</h4>
                    <h4 className = "alcoholAndDrugs" key = {index}><img src = {Drugs}/> <br />{review.alcoholAndDrugs}</h4>
                    <h4 className = "gambling" key = {index}><img src = {Gambling} />  <br />{review.gambling}</h4>
                    <h4 className = "explicitLanguage" key = {index}><img src = {BadLanguage} />    <br />{review.explicitLanguage}</h4>
            
             
                </div>
            )}

        </div>
    )
}

export default Review;