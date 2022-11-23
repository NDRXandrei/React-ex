import React from "react";
import { createContext } from "react";
export const LanguageContext = React.createContext("eng");

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <>
        <select>
          <option lang={this.context}>Italiano</option>
          <option lang={this.context}>English</option>
        </select>
      </>
    );
  }
}
