import React from "react";

export class TodoList extends React.Component {
  state = { item: [], inputs: "" };

  handleInput = (e) => {
    this.setState({ inputs: e.target.value });
  };

  addItem = (e) => {
    const inputs = this.state.inputs;
    const arr = this.state.item;
    arr.push(inputs);
    this.setState({ item: arr, inputs: "" });
  };

  reset = (e) => {
    const arr = this.state.item;
    for (let i = 1; i <= arr.length; i++) {
      arr.pop();
      arr.shift();
      this.setState({ item: arr });
    }
  };

  render() {
    const items = this.state.item;
    const lista = items.map((element) => (
      <li key={element.toString()}>{element}</li>
    ));

    return (
      <div>
        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.inputs}
        ></input>
        <button onClick={this.addItem}>Aggiungi</button>
        <button onClick={this.reset}>Reset</button>
        <ul>{lista}</ul>
      </div>
    );
  }
}
