import React, { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";
import { ShowGithubUser } from "./ShowGithubUser";

export function GithubUserList() {
  const [user, setUser] = useState("");
  const [input, setInput] = useState("");
  const [username, setUsername] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const array = [];
  const handleSubmit = (e) => {
    array.push(input);
    setUser(array);
    setInput("");
  };

  useEffect(() => {
    if (user !== "") {
      array.push(user);
      setUsername(username.concat(array));
    }
  }, [user]);

  const list = username.map((user) => {
    if (user !== null && user !== undefined) {
      return (
        <ShowGithubUser user={user} key={user.toString()}/>
      );
    }
  });

  return (
    <>
      <input type="text" onChange={handleChange} value={input}></input>
      <button onClick={handleSubmit}>Search</button>
      <div>{list}</div>
    </>
  );
}
