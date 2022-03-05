import React from "react";
import star from "../images/star.png"
import data from "../data.js"


export default function Card(props){
    const alt = "not available"
    console.log(data)
    return(

        

        <div className={"Card"}>
            <img src={props.img} alt={alt} />
            <div>
                <img src={star} alt={alt} id="cardStar" />
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.cardName}</p>
            <p> <span style={{'fontWeight': 'bold'}} >  {props.price} </span>/ person</p>
        </div>
    )
}