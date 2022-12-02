import React, { useEffect, useState } from "react";
import { UseGithubUser } from "./UseGithubUser";

export function GithubUser(props) {
  const fetch = UseGithubUser();
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
