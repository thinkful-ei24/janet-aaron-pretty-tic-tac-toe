import React, { Component } from "react";
import "./App.css";
import Pictures from './pictures';

class Grids extends Component {
  constructor(props) {
    super(props);

  }

  render() {


    if (this.props.somethingState === true) {
      return <div className = {this.props.grid} onClick={this.props.change}></div>;
    }
    if (this.props.somethingState === false) {
      return <Pictures imagesrc= {this.props.imagesrc} grid={this.props.grid} />
    }
  }
}
export default Grids;
