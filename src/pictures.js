import React, { Component } from "react";
import "./App.css";

export default function Pictures(props) {

    return(

        <div className={props.grid} ><img className="boxImg" src={props.imagesrc}/></div>
    
    );
  
}
