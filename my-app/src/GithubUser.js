import React, { useEffect, useState } from "react";

export function GithubUser(props) {
  const [username, setUsername] = useState("");
  let user = props.user;

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.name);
        console.log(data)
      });
  }, []);

  return <div>{username}</div>;
}
