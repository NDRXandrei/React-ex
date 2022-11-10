import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), this.props.interval);
  }

  tick() {
    this.setState({
      count: this.state.count + this.props.amount,
    });
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
