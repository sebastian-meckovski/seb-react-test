import React from "react";
import cardPhoto1 from "../images/katie-zaferes.png";
import star from "../images/star.png"

export default function Card(){
    return(
        <div className="Card">
            <img src={cardPhoto1} alt="not available" />
            <div>
                <img src={star} alt="not available" />
                <span>5.0</span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Kaie Zaferes</p>
            <p> £168 / person</p>
        </div>
    )
}