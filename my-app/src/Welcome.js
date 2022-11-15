import React from "react";

class Age extends React.Component {
  render() {
    const majorAge = this.props.age;
    if (majorAge > 18 && majorAge < 65) {
      return <p>Your age is {majorAge}</p>;
    } else {
      return <p>You are very young!</p>;
    }
  }
}
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}</p>
        {/* <Age age={this.props.age} /> */}
      </div>
    );
  }
}
