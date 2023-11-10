import React from "react";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constants";
import './Testimonials.css';
import { AiFillStar } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const Pulse = styled.div`animation: 5s ${keyframes`${pulse}`} infinite`;

const reviews = [
    {image: images.iqsf, name: "Sophie", reviewText: "An absolute delight! The fusion of flavors took my taste buds on a journey I didn't want to end. Truly a masterpiece on a plate"},
    {image: images.sajal, name: "Charlotte", reviewText: "Outstanding service and delectable dishes! The attention to detail is evident in every bite. It's a culinary highlight in the city."},
    {image: images.ramsha, name: "Rachel", reviewText: "A feast for the senses! Every dish was beautifully presented and packed with authentic, robust flavors. Will definitely return."},
    {image: images.mawra, name: "Marwa", reviewText: "Incredible experience! The ambiance coupled with the exquisite cuisine made for an unforgettable evening. Can't recommend enough!"},
]

const ReviewCard = ({props}) => {
        return (
             <div className="app__testimonials-review">
               <div className="app__testimonials-stars">
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
               </div>
               <div className="app__testimonials-name-image">
                <img className="app__testimonial-review-image" src={props.image} alt={props.name} />
                 <h6 className="app__testimonials-review-name">{props.name}</h6>
               </div>
               <p className="app__testimonials-review-text">{props.reviewText}</p>
             </div>
            );
}
const Testimonials = () => {
    return (
        <div className="app__testimonials-content">
            <h1 className="app__testimonals-title">Testimonials</h1>
            {/* <ReviewCard /> */}
            <div className="app__testimonial-review-card">
                {
                    reviews.map((review) => {
                            return (
                                <Pulse>
                                    <ReviewCard props={review} />
                                </Pulse>
                            );
                        })
                }
            </div>
        </div>
    );
}

export default AppWrap(Testimonials, 'testimonials-section', 'app__testimonials');