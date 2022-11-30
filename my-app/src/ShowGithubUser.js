import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser(props) {
  const { user = 'NDRXandrei' } = useParams();

  return <GithubUser user={props.user} />;
}
