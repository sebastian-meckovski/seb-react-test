import React from "react"
import pic from "../images/aibnb-logo.png"

export default function Navbar(){
    return(
    <nav>
        <img id="nav-logo" src={pic} alt="not displayed" />
        <h1> Hello I'm seb </h1>
    </nav>
    )
}