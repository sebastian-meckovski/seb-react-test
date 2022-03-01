import React from "react";
import cardPhoto1 from "../images/katie-zaferes.png";
import star from "../images/star.png"

export default function Card(props){
    return(
        <div className="Card">
            <img src={cardPhoto1} alt="not available" />
            <div>
                <img src={star} alt="not available" id="cardStar" />
                <span className="gray">5.0 </span>
                <span className="gray">usa</span>
            </div>
            <p>Life Lessons with Kaie Zaferes</p>
            <p> <span style={{'fontWeight': 'bold'}} >  £168 </span>/ person</p>
        </div>
    )
}