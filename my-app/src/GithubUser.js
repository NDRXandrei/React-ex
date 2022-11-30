import React, { useEffect, useState } from "react";

const useGithubUser = (user) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${user}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsername(data.name);
  //       console.log(data);
  //     });
  // }, []);

  const useFetch = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => {
        if (response.ok === false) {
          throw Error(response.status);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUsername(data.name);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });

    return [username, loading, error];
  };

  return useFetch;
};

export function GithubUser(props) {
  const fetch = useGithubUser();

  const user = fetch(props.user);

  console.log(user);
  return (
    <div>
      <h5 style={user[1] === true ? { display: "block" } : { display: "none" }}>
        Loading...
      </h5>
      <h3>{user[0]}</h3>
      <h1>{user[2]}</h1>
    </div>
  );
}
