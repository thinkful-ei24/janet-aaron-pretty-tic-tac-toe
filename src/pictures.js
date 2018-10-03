import React, { Component } from "react";
import "./App.css";

export default function Pictures(props) {
   
    return(

         
         <div className="grid-item" ><img className="boxImg" src={props.imagesrc} /></div>
    );
  
}
