import React, { Component } from "react";
import "./App.css";
export default function Rick (props) {
    
 return(
     
     <div>
    <img src="https://media.giphy.com/media/a6OnFHzHgCU1O/giphy.gif" />
    <button type="button" onClick={props.change}>
    New Game
   </button> 
    </div>
     );     
      }
  
