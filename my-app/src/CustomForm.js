import React, { useEffect, useState } from "react";

const useForm = () => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return { data, handleChange };
};

export function CustomForm(props) {
  const { data, handleChange } = useForm(
    {
      username: "",
      password: "",
    },
    
  );


  const { username, password } = data;

  return (
    <>
      <form>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        ></input>
      </form>
    </>
  );
}
