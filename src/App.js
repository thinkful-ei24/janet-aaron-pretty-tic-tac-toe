import React, { Component } from "react";
import "./App.css";
import Grids from "./grids";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inGame: false,
      something: true,
      something2: true,
      something3: true,
      something4: true,
      something5: true,
      something6: true,
      something7: true,
      something8: true,
      something9: true,

      myObj: {
        image1: false,
        image2: false,
        image3: false,
        image4: false,
        image5: false,
        image6: false,
        image7: false,
        image8: false
      },

      image: [
        "https://picsum.photos/200/300/?random",
        "https://picsum.photos/100/200/?random",
        "https://picsum.photos/100/400/?random",
        "https://picsum.photos/200/200/?random",
        "https://picsum.photos/400/700/?random",
        "https://picsum.photos/150/250/?random",
        "https://picsum.photos/400/400/?random",
        "https://picsum.photos/200/100/?random"
      ]
    };
  }

  numbers = [
    { one: Math.floor(Math.random() * 8) },
    { two: Math.floor(Math.random() * 8) },
    { three: Math.floor(Math.random() * 8) },
    { four: Math.floor(Math.random() * 8) },
    { five: Math.floor(Math.random() * 8) },
    { six: Math.floor(Math.random() * 8) },
    { seven: Math.floor(Math.random() * 8) },
    { eight: Math.floor(Math.random() * 8) },
    { nine: Math.floor(Math.random() * 8) }
  ];

  render() {
    let className;

    if (this.state.display) {
      className = "player2 grid-item";
    }
    if (!this.state.display) {
      className = "player1 grid-item";
    }

    const image1 = this.state.image[this.numbers[0].one];
    const image2 = this.state.image[this.numbers[1].two];
    const image3 = this.state.image[this.numbers[2].three];
    const image4 = this.state.image[this.numbers[3].four];
    const image5 = this.state.image[this.numbers[4].five];
    const image6 = this.state.image[this.numbers[5].six];
    const image7 = this.state.image[this.numbers[6].seven];
    const image8 = this.state.image[this.numbers[7].eight];
    const image9 = this.state.image[this.numbers[8].nine];

    if (this.state.inGame === false) {
      return (
        <div className="grid-container">
          {" "}
          <Grids
            grid={className}
            imagesrc={image1}
            somethingState={this.state.something}
            change={() => this.setState({ something: false })}
          />
          <Grids
            grid={className}
            imagesrc={image2}
            somethingState={this.state.something2}
            change={() => this.setState({ something2: false })}
          />
          <Grids
            grid={className}
            imagesrc={image3}
            somethingState={this.state.something3}
            change={() => this.setState({ something3: false })}
          />
          <Grids
            grid={className}
            imagesrc={image4}
            somethingState={this.state.something4}
            change={() => this.setState({ something4: false })}
          />
          <Grids
            grid={className}
            imagesrc={image5}
            somethingState={this.state.something5}
            change={() => this.setState({ something5: false })}
          />
          <Grids
            grid={className}
            imagesrc={image6}
            somethingState={this.state.something6}
            change={() => this.setState({ something6: false })}
          />
          <Grids
            grid={className}
            imagesrc={image7}
            somethingState={this.state.something7}
            change={() => this.setState({ something7: false })}
          />
          <Grids
            grid={className}
            imagesrc={image8}
            somethingState={this.state.something8}
            change={() => this.setState({ something8: false })}
          />
          <Grids
            grid={className}
            imagesrc={image9}
            somethingState={this.state.something9}
            change={() => this.setState({ something9: false })}
          />
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
            onClick={() =>
              this.setState({
                inGame: false,
                something: true,
                something2: true,
                something3: true,
                something4: true,
                something5: true,
                something6: true,
                something7: true,
                something8: true,
                something9: true
              })
            }
          >
            New Game
          </button>
        </div>
      );
    }
  }
}

export default App;
