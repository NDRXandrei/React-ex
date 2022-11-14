import React from "react";

export class ClickTracker extends React.Component {
  state = { id: 1, idtarget: "" };

  handleClick = (btn) => {
    this.setState({
      id: this.state.id + 1,
    });
    if (this.state.id === 3) {
      this.setState({ idtarget: `${btn.target.className}`});
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.idtarget}</h1>
        <button onClick={this.handleClick} className="1">
          1
        </button>
        <button onClick={this.handleClick} className="2">
          2
        </button>
        <button onClick={this.handleClick} className="3">
          3
        </button>
      </div>
    );
  }
}
