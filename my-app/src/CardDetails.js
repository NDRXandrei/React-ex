import React, { useEffect, useRef, useState } from "react";

export function CardDetails(props) {
  const inputEl = useRef("");
  const [car, setCar] = useState(props.car);

  const onSubmit = (e) => {
    setCar(props.car);
  };

  const inputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCar({ ...car, [name]: value });
    inputEl.current = car;
  };

  return (
    <>
      <input ref={inputEl} onChange={inputValue} type="text" name="model" />
      <input ref={inputEl} onChange={inputValue} type="text" name="year" />
      <input ref={inputEl} onChange={inputValue} type="text" name="color" />
      <button onClick={onSubmit}>Reset</button>
      <h3>{car.model}</h3>
      <h3>{car.year}</h3>
      <h3>{car.color}</h3>
    </>
  );
}
