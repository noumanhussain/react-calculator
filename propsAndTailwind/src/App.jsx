import { useState } from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
import CurrencyConverter from "./components/CurrencyConverter";
import Router from "./components/router/Router";

function App() {
  let useData = {
    userName: "test",
    age: 20,
  };
  return (
    <>
      <h1 className="text-4xl text-center text-blue-500">
        Learning with React
      </h1>
      {/* Password Generator App */}
      {/* <PasswordGenerator /> */}

      {/* <CurrencyConverter /> */}

      <Router />
    </>
  );
}

export default App;
