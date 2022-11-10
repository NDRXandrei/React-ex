import React from "react";
export class Counter extends React.Component {
  render() {
    return (
      <div>
        <CounterDisplay
          count={5}
          other={{ amount: this.props.amount, interval: this.props.interval }}
        />
      </div>
    );
  }
}

class CounterDisplay extends React.Component {
  state = { count: this.props.count };
  //   constructor(props) {
  //     super(props);
  //     this.state = { count: this.props.count };
  //   }

  //non è necessario

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), this.props.other.interval);
  }

  tick() {
    this.setState({
      count: this.state.count + this.props.other.amount,
    });
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
