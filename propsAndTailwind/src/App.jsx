import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import PasswordGenerator from "./components/PasswordGenerator";

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
      {/* <Card userName="test" detail={useData} /> */}
      <PasswordGenerator />
    </>
  );
}

export default App;
