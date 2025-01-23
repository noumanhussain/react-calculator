import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let useData = {
    userName: "test",
    age: 20,
  };
  return (
    <>
      <h1 className="text-4xl text-center text-blue-500">Props and Tailwind</h1>
      <Card userName="test" detail={useData} />
    </>
  );
}

export default App;