import React, { useEffect, useState } from "react";

const useGithubUser = (user) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.name);
      });
  }, []);

  return [username];
};
export function GithubUser(props) {
  const user = useGithubUser(props.user);

  return <div>{user}</div>;
}
