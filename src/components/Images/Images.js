import React from 'react';
import "./Images.css";

function images(props) {
        return (
            <img src={props.pic} alt="oops" onClick={props.clicked}/>
        )
};

export default images;