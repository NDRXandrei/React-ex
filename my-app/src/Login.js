import React from "react";

export class Login extends React.Component {
  state = { username: "", password: "", disabled: true };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  onLogin = (e) => {
    this.props.log()
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="user"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="pass"
          value={this.state.password}
          onChange={this.handleInputChange}
        ></input>
        <input type="checkbox"></input>
        remember me
        <button
          disabled={
            this.state.username !== "" && this.state.password !== ""
              ? false
              : true
          }
          onClick={this.onLogin}
        >
          login
        </button>
      </div>
    );
  }
}
