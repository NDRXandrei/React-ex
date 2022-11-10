import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
