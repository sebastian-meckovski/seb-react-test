import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function Hero(){
    return(
        <div id="section">
            <img id="photoGrid" src={photoGrid} alt="not available" />
            <h1 className="hero--header">Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}