import React, { Component } from "react";
import "./App.css";
import Grids from "./grids";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inGame: false,
      display: true,
      

    };
  }




  render() {
    let className;

    if (this.state.display){
      className= 'player2 grid-item';
    } 
    if(!this.state.display){
      className= 'player1 grid-item';
    }


    if (this.state.inGame === false) {
      return (
        <div className="grid-container">
          {" "}
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />
          <Grids grid={className} onClick={() => {
            this.setState({ display: !this.state.display });
          }} />

          <button
            type="button"
            onClick={() => this.setState({ inGame: "rick" })}
          >
            Play another Game!
          </button>
        </div>
      );
    }

  


    if (this.state.inGame === true) {
      return (
        <div>
          <button
            type="button"
            onClick={() => this.setState({ inGame: false })}
          >
            New Game
          </button>
        </div>
      );
    }

    if (this.state.inGame === "rick") {
      return (
        <div>
          <img src="https://media.giphy.com/media/a6OnFHzHgCU1O/giphy.gif" />
          <button
            type="button"
            onClick={() => this.setState({ inGame: false })}
          >
            New Game
          </button>
        </div>
      );
    }
  }
}

// <div class="grid-item">2</div>{" "}
//           <div class="grid-item">3</div> <div class="grid-item">4</div>{" "}
//           <div class="grid-item">5</div> <div class="grid-item">6</div>{" "}
//           <div class="grid-item">7</div> <div class="grid-item">8</div>{" "}
//           <div class="grid-item hello">9</div>{" "}
export default App;
