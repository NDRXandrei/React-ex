import React from "react";
export class Welcome extends React.Component {
  static defaultProps = {
    name: "Simon",
  };
  // si è possibile settare un valore di default mediante static defaultProps
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}</p>
      </div>
    );
  }
}
