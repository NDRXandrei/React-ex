import React from "react";

export class CounterClick extends React.Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
