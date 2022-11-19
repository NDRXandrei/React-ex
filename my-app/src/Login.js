import React from "react";

class UncontrolledLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", disabled: true };
    this.input = React.createRef();
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onLogin = (e) => {
    alert("E' stato inserito un nome: " + this.input.current.value);
  };

  clear = (e) => {
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="user"
          ref={this.input}
          onChange={this.handleInputChange}
          autoFocus
        ></input>
        <input
          type="password"
          name="password"
          placeholder="pass"
          ref={this.input}
          onChange={this.handleInputChange}
          style={this.state.password.length < 8 ? {backgroundColor: "red"} : {backgroundColor: "green"}}
        ></input>
        <input
          type="checkbox"
          ref={this.input}
          onChange={this.handleInputChange}
        ></input>
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
        <button onClick={this.clear}>reset</button>
      </div>
    );
  }
}
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
    alert("E' stato inserito un nome: " + this.state.username);
  };

  clear = (e) => {
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div>
        {/* <input
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
        <button onClick={this.clear}>reset</button> */}

        <UncontrolledLogin />
      </div>
    );
  }
}
