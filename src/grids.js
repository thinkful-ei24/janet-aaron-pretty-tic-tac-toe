import React, { Component } from "react";
import "./App.css";
import Pictures from './pictures';

class Grids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      something: true,
      player: one
    };
  }

  render() {
    if (this.state.something === true) {
      return <div className="grid-item" onClick={() => this.setState({something: false})}></div>;
    }
    if (this.state.something === false) {
      return <Pictures thisPlayer={this.state.player} />
    }
  }
}
export default Grids;
