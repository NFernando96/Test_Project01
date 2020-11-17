import React, { Component } from "react";

class Component1 extends Component {
  state = {
    counter: 0,
  };

  submit = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>This is class based Component</h1>

        {this.state.counter}

        <br />

        <input type="button" onClick={this.submit} value="Sumbit" />
      </div>
    );
  }
}

export default Component1;
