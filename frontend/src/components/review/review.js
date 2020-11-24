import React, { useEffect, useState } from "react";
import axios from 'axios';


const Review = () => {

    const [reviews, setReviews] = useState([]);
    const [user, setUser] = useState('');

    const getResponse = () => {
        let gameID = sessionStorage.getItem("gameID");
        
        axios.get(`http://localhost:5000/reviews/game/${gameID}`).then((res) => {
            setReviews(res.data.reviews);
        }); 
        console.log(reviews);
    };

    useEffect(() => {
        // async function fetchData() {
        //     if (reviews.length == 0) {
        //         getResponse();
        //         console.log(3);
        //     } else {
        //         setReviews(reviews.map(async (review, index) => {
        //             console.log(review.reviewer)
        //             const res = await axios.get(`http://localhost:5000/users/${review.reviewer}`); 
        //             return {
        //                 review, 
        //                 reviewer: res.data.user.username 
        //             }
        //         }))
        //     }
        // }
        // fetchData();
        getResponse();
    });
    
    return (
        <div className = 'reviews'>  
            <p>hello</p>  
            {/* {reviews.map((review, index) =>
                <div className = "review">
                    <h1 key = {index}>{review.gameTitle}</h1>
                    <h2 key = {index}>{review.title}</h2>
                    <h3 key = {index}>{review.reviewer}</h3>  
                </div>
            )} */}
        </div>
    )
}

export default Review;