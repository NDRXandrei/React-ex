import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { CounterClick } from "./CounterClick";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { DisplayLanguage, LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { CustomCounter } from "./CustomCounter";
import { CustomForm } from "./CustomForm";
import { CardDetails } from "./CardDetails";

export class App extends React.Component {

  // onCounterChange(e) {
  //   document.title = `You clicked ${e} times`;
  //   return `You clicked ${e} times`
  // }

  render() {
    return (
      <div>
        {/* <Hello /> */}
        {/* <Welcome age={17}/> */}
        {/* <Counter count={5} interval= {1000} amount= {5}/> */}
        {/* <CounterClick effect={this.onCounterChange} /> */}
        {/* <ClickTracker /> */}
        {/* <InteractiveWelcome /> */}
        {/* <Login /> */}
        {/* <TodoList
          render={(item) => {
            return <ul>{item}</ul>;
          }}
        ></TodoList> */}
        {/* <Container title="Hello World"/> */}
        <LanguageContext.Provider value="ita">
          <DisplayLanguage/>
        </LanguageContext.Provider>
        {/* <Sum /> */}
        {/* <GithubUser /> */}
        {/* <GithubUserList /> */}
        {/* <CustomCounter /> */}
        {/* <CustomForm /> */}
        {/* <CardDetails car={{model: 'Panda', year: 1990, color: 'green'}}/> */}
      </div>
    );
  }
}
