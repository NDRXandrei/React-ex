import React, { useEffect, useMemo, useState } from "react";

export function FilteredList(props) {
  const memo = useMemo(() => filter(props.persons));

  return (
    <>
      <h1>
        {memo[0].name}: {memo[0].age}
      </h1>
    </>
  );
}

const filter = (age) => {
  const filtered = age.filter((person) => person.age > 18);
  return filtered;
};

// console.log(filter(persons));
