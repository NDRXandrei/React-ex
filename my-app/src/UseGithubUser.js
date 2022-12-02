import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export const UseGithubUser = (user) => {
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
