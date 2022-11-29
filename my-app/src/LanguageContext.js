import React, { useContext, useState } from "react";

export const LanguageContext = React.createContext("eng");

// export class DisplayLanguage extends React.Component {
//   state = { language: "" };
//   handleLanguage = (e) => {
//     this.setState({ language: e.target.value });
//   };
//   render() {
//     console.log(this.state.language);
//     return (
//       <>
//         <select onChange={this.handleLanguage}>
//           <option value={this.context._currentValue}>Italiano</option>
//           <option value={this.context._currentValue}>English</option>
//         </select>
//         <h1>{this.state.language}</h1>
//       </>
//     );
//   }
// }

export function DisplayLanguage(props) {
  const lingua = useContext(LanguageContext);
  const [language, setLanguage] = useState("");

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <select onChange={handleLanguage}>
        <option value={lingua._currentValue}>Italiano</option>
        <option value={lingua._currentValue}>English</option>
      </select>
      <h1>{language}</h1>
    </>
  );
}
