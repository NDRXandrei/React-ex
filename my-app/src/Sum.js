import React from "react";

export function Sum(props) {
  props = { num: [1, 2, 3, 4, 5] };
  const somma = props.num.reduce((sum, num) => sum + num);
  return <h1>{somma}</h1>;
}
