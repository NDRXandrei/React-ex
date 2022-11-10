import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello />
        <Welcome age={17}/> */}
        <Counter count={2} interval= {200} amount= {5}/>
      </div>
    );
  }
}
