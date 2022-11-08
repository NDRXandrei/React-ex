import React from "react";
export class Welcome extends React.Component {
  static defaultProps = {
    name: <strong>Simon</strong>,
  }; // viene visualizzato e può essere scritto similmente all'html
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}
