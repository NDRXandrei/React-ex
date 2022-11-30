import React, { useState } from "react";
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
import { FilteredList } from "./FilteredList";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

// export class App extends React.Component {
// onCounterChange(e) {
//   document.title = `You clicked ${e} times`;
//   return `You clicked ${e} times`
// }

// render() {
//   return (
//     <div>
{
  /* <Hello /> */
}
{
  /* <Welcome age={17}/> */
}
{
  /* <Counter count={5} interval= {1000} amount= {5}/> */
}
{
  /* <CounterClick effect={this.onCounterChange} /> */
}
{
  /* <ClickTracker /> */
}
{
  /* <InteractiveWelcome /> */
}
{
  /* <Login /> */
}
{
  /* <TodoList
          render={(item) => {
            return <ul>{item}</ul>;
          }}
        ></TodoList> */
}
{
  /* <Container title="Hello World"/> */
}
{
  /* <LanguageContext.Provider value="eng">
          <DisplayLanguage/>
        </LanguageContext.Provider> */
}
{
  /* <Sum /> */
}
{
  /* <GithubUser /> */
}
{
  /* <GithubUserList /> */
}
{
  /* <CustomCounter /> */
}
{
  /* <CustomForm /> */
}
{
  /* <CardDetails car={{model: 'Panda', year: 1990, color: 'green'}}/> */
}
{
  /* <FilteredList
          persons={[
            { id: 0, name: "John", age: "17" },
            { id: 1, name: "Simon", age: "19" },
          ]}
        /> */
}
//       </div>
//     );
//   }
// }

export function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" index element={<Welcome name="John" />} />
          <Route
            path="/counter"
            element={<Counter count={5} interval={1000} amount={5} />}
          />
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Not Found</h1>
                <h3>
                  <Link to="welcome">Home</Link>
                </h3>
              </div>
            }
          />
        </Routes>
        <h3>
          <Link to="welcome">Welcome</Link>
        </h3>

        <h3>
          <Link to="counter">Counter</Link>
        </h3>
        <h3>
          <Link to="users/:username">User</Link>
        </h3>
      </BrowserRouter>
    </>
  );
}
