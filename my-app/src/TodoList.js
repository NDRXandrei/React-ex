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
    for (let i = 0; i <= arr.length; i++) {
      arr.splice(i);
      this.setState({ item: arr });
    }
  };

  remove = (e) => {
    const arr = this.state.item;
    const value = e.target.value;
    const id = arr.indexOf(arr.find((id) => id === value));
    console.log(id);
    if (id === 0) {
      arr.shift();
      this.setState({ item: arr });
    } else {
      arr.splice(id, id);
      this.setState({ item: arr });
    }
  };

  render() {
    const items = this.state.item;
    const lista = items.map((element) => (
      <li key={element.toString()}>
        {element}
        <button onClick={this.remove} value={element}>
          Remove
        </button>
      </li>
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
