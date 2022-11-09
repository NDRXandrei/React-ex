import React from "react";

class Age extends React.Component {
  render() {
    const majorAge = this.props.age;
    if (majorAge > 18 && majorAge < 65) {
      return <p>Your age is {majorAge}</p>;
    } else if (majorAge < 18) {
      return <p>Too young </p>;
    } else {
      return <p>Too old</p>;
    }
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
        <Age age={this.props.age} />
      </div>
    );
  }
}
