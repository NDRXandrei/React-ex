import React from "react";

export class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <input type="checkbox"></input>
        remember me
      </div>
    );
  }
}
