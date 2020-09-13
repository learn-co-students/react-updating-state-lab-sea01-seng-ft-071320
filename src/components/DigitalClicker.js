import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  render() {
    return <button onClick={this.increment}>{this.state.timesClicked}</button>;
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        timeClicked: prevState.timesClicked++,
      };
    });
  };
}

export default DigitalClicker;
