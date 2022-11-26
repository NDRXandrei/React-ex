import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// export class Login extends React.Component {
//   state = { username: "", password: "", disabled: true };

//   handleInputChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     this.setState({
//       [name]: value,
//     });
//   };

//   onLogin = (e) => {
//     this.props.log();
//   };

//   handleFormChange(e) {
//     console.log(e.target.name);
//     this.setState({ [e.target.name]: e.target.value }, () => {
//       if (this.state.username !== "" && this.state.password !== "") {
//         this.setState({ disabled: false });
//       }
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onChange={this.handleFormChange.bind(this)}>
//           <input
//             type="text"
//             name="username"
//             placeholder="user"
//             value={this.state.username}
//           ></input>
//           <input
//             type="password"
//             name="password"
//             placeholder="pass"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//           ></input>
//           <input type="checkbox"></input>
//           remember me
//           <button
//             disabled={
//               this.state.username !== "" && this.state.password !== ""
//                 ? false
//                 : true
//             }
//             disabled={this.state.disabled}
//             onClick={this.onLogin}
//           >
//             login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export function Login(props) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (data.username !== "" && data.password !== "") {
      setData({ ...data, disabled: false });
    }
  });

  const [data, setData] = useState({
    username: "",
    password: "",
    disabled: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });

    console.log();
  };

  return (
    <>
      <form onChange={handleChange}>
        <input type="text" name="username"></input>
        <input type="password" name="password"></input>
        <button disabled={data.disabled}>Login</button>
      </form>
    </>
  );
}
