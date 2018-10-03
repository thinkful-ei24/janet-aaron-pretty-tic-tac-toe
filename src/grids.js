import React, { Component } from "react";
import "./App.css";
import Pictures from './pictures';
import "./index.css"

class Grids extends Component {
  constructor(props) {
    super(props);

  }

  render() {


    if (this.props.somethingState === true) {
      return <div className =  "player1 grid-item" onClick={this.props.change}></div>;
    }
    if (this.props.somethingState === false) {
      return <Pictures imagesrc= {this.props.imagesrc} grid={this.props.grid} />
    }
  }
}
export default Grids;
