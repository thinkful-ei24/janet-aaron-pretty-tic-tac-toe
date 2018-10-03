import React, { Component } from "react";
import "./App.css";
import Pictures from './pictures';

class Grids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      something: true,
      player: true
    };
  }

  render() {


    if (this.state.something === true) {
      return <div className = {this.props.grid} onClick={() => this.setState({something: false, player: !this.state.player})}></div>;
    }
    if (this.state.something === false) {
      return <Pictures imagesrc= {this.props.imagesrc} grid={this.props.grid} />
    }
  }
}
export default Grids;
