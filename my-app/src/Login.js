import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        ></input>
        <input
          type="checkbox"
          value={this.state.remember}
          onChange={this.handleInputChange}
        ></input>
        remember me
      </div>
    );
  }
}
