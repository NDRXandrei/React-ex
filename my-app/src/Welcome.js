import React from "react";

class Age extends React.Component {
  render() {
    return <p>Your age is {this.props.age}</p>;
  }
}
export class Welcome extends React.Component {
  static defaultProps = {
    name: <strong>Simon</strong>,
  };
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}</p>
        <Age age={this.props.age}  />
      </div>
    );
  }
}
