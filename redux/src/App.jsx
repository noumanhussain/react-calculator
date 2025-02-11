import { useState } from "react";
import "./App.css";
import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
