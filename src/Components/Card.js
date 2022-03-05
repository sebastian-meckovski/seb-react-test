import React from "react";
import star from "../images/star.png"


export default function Card(props){
    const alt = "not available"
    return(
        <div className={"Card"}>
            <img src={props.img} alt={alt} />
            <div>
                <img src={star} alt={alt} id="cardStar" />
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.cardName}</p>
            <p> <span style={{'fontWeight': 'bold'}} >  {props.price} </span>/ person</p>
        </div>
    )
}