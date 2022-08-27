import React, { useState } from 'react';

const SecretButton = () => {
    const [facesVis, setFaces] = useState(false)
    const onClick = () => {
        setFaces(!facesVis)
        document.querySelector("#faceleft").hidden = facesVis
        document.querySelector("#faceright").hidden = facesVis
    }
    return (
        
        <div>
            <a style={btnStyle} href="#name" onClick={onClick} >
                Secret Button
            </a>
        </div>
    )
}

export default SecretButton;

const btnStyle = {
    height: "5vh",
    fontSize: "13px",
    color: "gray",
    backgroundColor: "black",
    border: "none",
    paddingLeft: "1.5%",
    paddingRight: "1.5%",
    textDecoration: "none"
}