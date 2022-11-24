import React from "react";

export function Sum(props) {
  const somma = props.num.reduce((sum, num) => sum + num);
  return <h1>{somma}</h1>;
}
