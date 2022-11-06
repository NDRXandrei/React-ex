import React from "react";

function Message(props) {
  return <p>{props.message}</p>;
}

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Message message={p} />
      </div>
    );
  }
}

const p = "What a beautiful day!";

// export const p = <p>What a beautiful day!</p>;
