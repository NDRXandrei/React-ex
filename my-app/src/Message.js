import React from "react";
import { p } from "./Hello";

export class Message extends React.Component {
  render() {
    return (
      <div>
        {p}
      </div>
    );
  }
}
