import React from "react";

class Age extends React.Component {
  render() {
    const majorAge = this.props.age;
    if (majorAge > 18 && majorAge < 65) {
      return <p>Your age is {majorAge}</p>;
    } 
  }
}
export class Welcome extends React.Component {
  static defaultProps = {
    name: <strong>John</strong>,
  };
  render() {
    const John = this.props.name.props.children;
    const majorAge = this.props.age;
    if (John === "John" && majorAge > 18 && majorAge < 65) {
      return (
        <div>
          <p>Welcome, {this.props.name}</p>
          <Age age={this.props.age} />
        </div>
      );
    } 
  }
}
