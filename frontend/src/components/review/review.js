import React, { useEffect, useState } from "react";
import axios from 'axios';
import './review.css';


const Review = () => {

    const [reviews, setReviews] = useState([]);

    const getResponse = () => {
        let gameID = sessionStorage.getItem("gameID");
        
        axios.get(`http://localhost:5000/reviews/game/${gameID}`).then((res) => {
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
                    <p className = 'date' key = {index}>{review.review.dateReviewed}</p>
                    <p className = 'reviewText' key = {index}>{review.review.review}</p>
                    <h4 className = 'reviewerScore' key = {index}>{review.review.reviewerScore}</h4>
                    <a className = 'linkToBuy' key = {index} href = {review.review.linkToBuy}>Link to buy </a>
                </div>
            )}
        </div>
    )
}

export default Review;