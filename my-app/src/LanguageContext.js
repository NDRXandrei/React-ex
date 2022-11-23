import React from "react";

export const LanguageContext = React.createContext("eng");
console.log(LanguageContext._currentValue);

export class DisplayLanguage extends React.Component {
  state = { language: "" };
  handleLanguage = (e) => {
    this.setState({ language: e.target.value });
  };
  render() {
    console.log(this.state.language);
    return (
      <>
        <select onChange={this.handleLanguage}>
          <option value={this.context._currentValue}>Italiano</option>
          <option value={this.context._currentValue}>English</option>
        </select>
        <h1>{this.state.language}</h1>
      </>
    );
  }
}
