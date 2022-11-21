import React from "react";

export class Login extends React.Component {
  state = { username: "", password: "", disabled: true };

  // handleInputChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  onLogin = (e) => {
    this.props.log();
  };

  handleFormChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.username !== "" && this.state.password !== "") {
        this.setState({ disabled: false });
      }
    });
  }

  render() {
    return (
      <div>
        <form onChange={this.handleFormChange.bind(this)}>
          <input
            type="text"
            name="username"
            placeholder="user"
            // value={this.state.username}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="pass"
            // value={this.state.password}
            // onChange={this.handleInputChange}
          ></input>
          <input type="checkbox"></input>
          remember me
          <button
            // disabled={
            //   this.state.username !== "" && this.state.password !== ""
            //     ? false
            //     : true
            // }
            disabled={this.state.disabled}
            onClick={this.onLogin}
          >
            login
          </button>
        </form>
      </div>
    );
  }
}
