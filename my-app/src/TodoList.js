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
    this.setState({ item: arr , inputs: ""});
  };

  render() {
    const items = this.state.item;
    const lista = items.map((element) => (
      <li key={element.toString()}>{element}</li>
    ));

    return (
      <div>
        <input type="text" onChange={this.handleInput} value={this.state.inputs}></input>
        <button onClick={this.addItem}>Aggiungi</button>
        <ul>{lista}</ul>
      </div>
    );
  }
}
