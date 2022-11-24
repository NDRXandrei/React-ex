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
export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello /> */}
        {/* <Welcome age={17}/> */}
        {/* <Counter count={2} interval= {200} amount= {5}/> */}
        {/* <CounterClick /> */}
        {/* <ClickTracker /> */}
        {/* <InteractiveWelcome /> */}
        {/* <Login /> */}
        {/* <TodoList
          render={(item) => {
            return <ul>{item}</ul>;
          }}
        ></TodoList> */}
        {/* <Container title="Hello World"/> */}
        {/* <LanguageContext.Provider value="ita">
          <DisplayLanguage/>
        </LanguageContext.Provider> */}
        <Sum />
      </div>
    );
  }
}
