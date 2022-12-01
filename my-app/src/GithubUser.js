import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = (user) => {
  //   const [username, setUsername] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState("");

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${user}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsername(data.name);
  //       console.log(data);
  //     });
  // }, []);

  const useFetch = (user) => {
    //   fetch(`https://api.github.com/users/${user}`)
    //     .then((response) => {
    //       if (response.ok === false) {
    //         throw Error(response.status);
    //       } else {
    //         return response.json();
    //       }
    //     })
    //     .then((data) => {
    //       setUsername(data.name);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       setLoading(false);
    //       setError(error.toString());
    //     });

    const { data, error } = useSWR(
      user !== null ? (
        `https://api.github.com/users/${user}`
      ) : (
        <h1>Non trovato</h1>
      ),
      fetcher
    );

    //   return [username, loading, error];

    return { data, error };
  };

  return useFetch;
};

export function GithubUser(props) {
  const fetch = useGithubUser();
  const user = fetch(props.user);

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  return (
    <div>
      {/* <h5 style={user[1] === true ? { display: "block" } : { display: "none" }}>
        Loading...
      </h5> */}
      <h3>{user.data?.name}</h3>
      {/* <h1>{user[2]}</h1> */}

      {/* <h3>{data.name}</h3> */}
    </div>
  );
}
