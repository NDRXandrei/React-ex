import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  
  change = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <Welcome name={this.state.value} />
        <input onChange={this.change}></input>
      </div>
    );
  }
}
